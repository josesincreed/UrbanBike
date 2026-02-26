
```
UrbanBike
├─ backend
│  ├─ .dockerignore
│  ├─ .prettierrc
│  ├─ dist
│  │  ├─ app.module.d.ts
│  │  ├─ app.module.js
│  │  ├─ app.module.js.map
│  │  ├─ application
│  │  │  ├─ dtos
│  │  │  │  ├─ create-bike.dto.d.ts
│  │  │  │  ├─ create-bike.dto.js
│  │  │  │  ├─ create-bike.dto.js.map
│  │  │  │  ├─ create-reservation.dto.d.ts
│  │  │  │  ├─ create-reservation.dto.js
│  │  │  │  ├─ create-reservation.dto.js.map
│  │  │  │  ├─ create-station.dto.d.ts
│  │  │  │  ├─ create-station.dto.js
│  │  │  │  ├─ create-station.dto.js.map
│  │  │  │  ├─ create-user.dto.d.ts
│  │  │  │  ├─ create-user.dto.js
│  │  │  │  ├─ create-user.dto.js.map
│  │  │  │  ├─ update-bike.dto.d.ts
│  │  │  │  ├─ update-bike.dto.js
│  │  │  │  └─ update-bike.dto.js.map
│  │  │  └─ use-cases
│  │  │     ├─ create-bike.use-case.d.ts
│  │  │     ├─ create-bike.use-case.js
│  │  │     ├─ create-bike.use-case.js.map
│  │  │     ├─ create-reservation.use-case.d.ts
│  │  │     ├─ create-reservation.use-case.js
│  │  │     ├─ create-reservation.use-case.js.map
│  │  │     ├─ create-station.use-case.d.ts
│  │  │     ├─ create-station.use-case.js
│  │  │     ├─ create-station.use-case.js.map
│  │  │     ├─ create-user.use-case.d.ts
│  │  │     ├─ create-user.use-case.js
│  │  │     ├─ create-user.use-case.js.map
│  │  │     ├─ delete-bike.use-case.d.ts
│  │  │     ├─ delete-bike.use-case.js
│  │  │     ├─ delete-bike.use-case.js.map
│  │  │     ├─ finish-reservation.use-case.d.ts
│  │  │     ├─ finish-reservation.use-case.js
│  │  │     ├─ finish-reservation.use-case.js.map
│  │  │     ├─ get-bike.use-case.d.ts
│  │  │     ├─ get-bike.use-case.js
│  │  │     ├─ get-bike.use-case.js.map
│  │  │     ├─ get-user.use-case.d.ts
│  │  │     ├─ get-user.use-case.js
│  │  │     ├─ get-user.use-case.js.map
│  │  │     ├─ list-bikes.use-case.d.ts
│  │  │     ├─ list-bikes.use-case.js
│  │  │     ├─ list-bikes.use-case.js.map
│  │  │     ├─ list-stations-with-available-bikes.use-case.d.ts
│  │  │     ├─ list-stations-with-available-bikes.use-case.js
│  │  │     ├─ list-stations-with-available-bikes.use-case.js.map
│  │  │     ├─ list-stations.use-case.d.ts
│  │  │     ├─ list-stations.use-case.js
│  │  │     ├─ list-stations.use-case.js.map
│  │  │     ├─ list-user-active-reservations.use-case.d.ts
│  │  │     ├─ list-user-active-reservations.use-case.js
│  │  │     ├─ list-user-active-reservations.use-case.js.map
│  │  │     ├─ update-bike.use-case.d.ts
│  │  │     ├─ update-bike.use-case.js
│  │  │     └─ update-bike.use-case.js.map
│  │  ├─ domain
│  │  │  ├─ entities
│  │  │  │  ├─ bike.entity.d.ts
│  │  │  │  ├─ bike.entity.js
│  │  │  │  ├─ bike.entity.js.map
│  │  │  │  ├─ reservation.entity.d.ts
│  │  │  │  ├─ reservation.entity.js
│  │  │  │  ├─ reservation.entity.js.map
│  │  │  │  ├─ station.entity.d.ts
│  │  │  │  ├─ station.entity.js
│  │  │  │  ├─ station.entity.js.map
│  │  │  │  ├─ user.entity.d.ts
│  │  │  │  ├─ user.entity.js
│  │  │  │  └─ user.entity.js.map
│  │  │  └─ repositories
│  │  │     ├─ bike.repository.interface.d.ts
│  │  │     ├─ bike.repository.interface.js
│  │  │     ├─ bike.repository.interface.js.map
│  │  │     ├─ reservation.repository.interface.d.ts
│  │  │     ├─ reservation.repository.interface.js
│  │  │     ├─ reservation.repository.interface.js.map
│  │  │     ├─ station.repository.interface.d.ts
│  │  │     ├─ station.repository.interface.js
│  │  │     ├─ station.repository.interface.js.map
│  │  │     ├─ user.repository.interface.d.ts
│  │  │     ├─ user.repository.interface.js
│  │  │     └─ user.repository.interface.js.map
│  │  ├─ infrastructure
│  │  │  ├─ database
│  │  │  │  ├─ dynamo.client.d.ts
│  │  │  │  ├─ dynamo.client.js
│  │  │  │  └─ dynamo.client.js.map
│  │  │  └─ repositories
│  │  │     ├─ dynamo-bike.repository.d.ts
│  │  │     ├─ dynamo-bike.repository.js
│  │  │     ├─ dynamo-bike.repository.js.map
│  │  │     ├─ dynamo-reservation.repository.d.ts
│  │  │     ├─ dynamo-reservation.repository.js
│  │  │     ├─ dynamo-reservation.repository.js.map
│  │  │     ├─ dynamo-station.repository.d.ts
│  │  │     ├─ dynamo-station.repository.js
│  │  │     ├─ dynamo-station.repository.js.map
│  │  │     ├─ dynamo-user.repository.d.ts
│  │  │     ├─ dynamo-user.repository.js
│  │  │     └─ dynamo-user.repository.js.map
│  │  ├─ main.d.ts
│  │  ├─ main.js
│  │  ├─ main.js.map
│  │  ├─ presentation
│  │  │  ├─ controllers
│  │  │  │  ├─ admin.controller.d.ts
│  │  │  │  ├─ admin.controller.js
│  │  │  │  └─ admin.controller.js.map
│  │  │  └─ modules
│  │  │     ├─ admin.module.d.ts
│  │  │     ├─ admin.module.js
│  │  │     ├─ admin.module.js.map
│  │  │     └─ public
│  │  │        ├─ public.controller.d.ts
│  │  │        ├─ public.controller.js
│  │  │        ├─ public.controller.js.map
│  │  │        ├─ public.module.d.ts
│  │  │        ├─ public.module.js
│  │  │        └─ public.module.js.map
│  │  └─ tsconfig.build.tsbuildinfo
│  ├─ Dockerfile
│  ├─ eslint.config.mjs
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ app.module.ts
│  │  ├─ application
│  │  │  ├─ dtos
│  │  │  │  ├─ create-bike.dto.ts
│  │  │  │  ├─ create-reservation.dto.ts
│  │  │  │  ├─ create-station.dto.ts
│  │  │  │  ├─ create-user.dto.ts
│  │  │  │  └─ update-bike.dto.ts
│  │  │  ├─ interfaces
│  │  │  └─ use-cases
│  │  │     ├─ create-bike.use-case.ts
│  │  │     ├─ create-reservation.use-case.ts
│  │  │     ├─ create-station.use-case.ts
│  │  │     ├─ create-user.use-case.ts
│  │  │     ├─ delete-bike.use-case.ts
│  │  │     ├─ finish-reservation.use-case.ts
│  │  │     ├─ get-bike.use-case.ts
│  │  │     ├─ get-user.use-case.ts
│  │  │     ├─ list-bikes.use-case.ts
│  │  │     ├─ list-stations-with-available-bikes.use-case.ts
│  │  │     ├─ list-stations.use-case.ts
│  │  │     ├─ list-user-active-reservations.use-case.ts
│  │  │     └─ update-bike.use-case.ts
│  │  ├─ config
│  │  ├─ domain
│  │  │  ├─ entities
│  │  │  │  ├─ bike.entity.ts
│  │  │  │  ├─ reservation.entity.ts
│  │  │  │  ├─ station.entity.ts
│  │  │  │  └─ user.entity.ts
│  │  │  ├─ enums
│  │  │  └─ repositories
│  │  │     ├─ bike.repository.interface.ts
│  │  │     ├─ reservation.repository.interface.ts
│  │  │     ├─ station.repository.interface.ts
│  │  │     └─ user.repository.interface.ts
│  │  ├─ infrastructure
│  │  │  ├─ database
│  │  │  │  └─ dynamo.client.ts
│  │  │  └─ repositories
│  │  │     ├─ dynamo-bike.repository.ts
│  │  │     ├─ dynamo-reservation.repository.ts
│  │  │     ├─ dynamo-station.repository.ts
│  │  │     └─ dynamo-user.repository.ts
│  │  ├─ main.ts
│  │  ├─ presentation
│  │  │  ├─ controllers
│  │  │  │  ├─ admin.controller.spec.ts
│  │  │  │  └─ admin.controller.ts
│  │  │  └─ modules
│  │  │     ├─ admin.module.ts
│  │  │     └─ public
│  │  │        ├─ public.controller.ts
│  │  │        └─ public.module.ts
│  │  └─ shared
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  └─ jest-e2e.json
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
├─ frontend
│  ├─ .env
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ app
│  │  │  ├─ router.tsx
│  │  │  └─ theme.ts
│  │  ├─ App.tsx
│  │  ├─ features
│  │  │  ├─ admin
│  │  │  ├─ bikes
│  │  │  ├─ reservations
│  │  │  │  ├─ components
│  │  │  │  ├─ hooks
│  │  │  │  └─ types
│  │  │  └─ stations
│  │  │     ├─ api
│  │  │     │  └─ stations.api.ts
│  │  │     ├─ components
│  │  │     │  ├─ StationCard.tsx
│  │  │     │  └─ StationList.tsx
│  │  │     ├─ hooks
│  │  │     │  └─ useStations.ts
│  │  │     └─ types
│  │  │        └─ Station.ts
│  │  ├─ main.tsx
│  │  └─ shared
│  │     ├─ components
│  │     │  └─ Layout.tsx
│  │     ├─ constants.ts
│  │     └─ utils
│  │        └─ http.ts
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ infrastructure
│  └─ cloudformation
│     ├─ dynamodb-table.yaml
│     ├─ ecr.yaml
│     ├─ ecs-cluster.yaml
│     ├─ ecs-iam.yaml
│     ├─ ecs-service.yaml
│     └─ ecs-task.yaml
└─ README.md

```