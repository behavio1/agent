CREATE TABLE "reksio_interactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"action_type" varchar(255) NOT NULL,
	"count" integer DEFAULT 1 NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "reksio_interactions_action_type_unique" UNIQUE("action_type")
);
