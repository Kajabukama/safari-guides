ALTER TABLE "user" ADD COLUMN "role" text DEFAULT 'owner' NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "user_type" text DEFAULT 'guide' NOT NULL;