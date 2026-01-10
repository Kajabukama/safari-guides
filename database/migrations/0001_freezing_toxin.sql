CREATE TABLE "user_profile" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"avatar" text,
	"location" text,
	"country" text,
	"rating" numeric(3, 2),
	"experience" text,
	"languages" text[],
	"tour_type" text,
	"group_size" text,
	"available" boolean DEFAULT true,
	"specialties" text[],
	"price" text,
	"verified" boolean DEFAULT false,
	"review_count" integer DEFAULT 0,
	"bio" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "user_profile_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;