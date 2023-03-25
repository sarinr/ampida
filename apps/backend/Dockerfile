FROM node:alpine AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=backend --docker

FROM node:alpine AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN yarn turbo run build --filter=backend...

FROM node:alpine AS runner
RUN apk add --no-cache dumb-init
WORKDIR /app

RUN addgroup --system --gid 1001 expressjs
RUN adduser --system --uid 1001 expressjs
USER expressjs
COPY --from=installer /app .

CMD ["dumb-init", "node", "apps/backend/dist/index.js"]
