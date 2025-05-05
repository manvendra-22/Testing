import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact form submission
      const result = await storage.createContactSubmission(validatedData);
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: result.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "Failed to submit contact form" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
