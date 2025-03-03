import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  company: z.string().min(1, 'Company is required'),
  email: z.string().email('Invalid email address'),
  requirements: z.string().min(1, 'Project requirements are required'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>; 