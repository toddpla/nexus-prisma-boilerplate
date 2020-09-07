# Migration `20200907212918-create-user`

This migration has been generated by Todd Langford-Archer at 9/7/2020, 10:29:18 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" SERIAL,
"email" text   NOT NULL ,
"password" text   NOT NULL ,
"firstName" text   NOT NULL ,
"lastName" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "public"."User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200907212918-create-user
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,21 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id        Int      @id @default(autoincrement())
+  email     String   @unique
+  password  String
+  firstName String
+  lastName  String
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+}
```

