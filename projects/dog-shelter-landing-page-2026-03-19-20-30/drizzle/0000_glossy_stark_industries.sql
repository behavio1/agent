CREATE TABLE "dog_shelter_dogs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"breed" text,
	"age" integer,
	"description" text,
	"image_url" text,
	"is_adopted" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "dog_shelter_inquiries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"dog_id" uuid,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"message" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "dog_shelter_inquiries" ADD CONSTRAINT "dog_shelter_inquiries_dog_id_dog_shelter_dogs_id_fk" FOREIGN KEY ("dog_id") REFERENCES "public"."dog_shelter_dogs"("id") ON DELETE no action ON UPDATE no action;