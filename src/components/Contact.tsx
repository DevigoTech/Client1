import { useState } from "react";
import { contactFormSchema } from "../lib/validations/contact";
import { EmailService } from "../lib/service/email";
import { z } from "zod";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    requirements: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setErrors({});
      // Validate form data
      contactFormSchema.parse(formData);
      // Send email using EmailJS
      await EmailService.sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        from_compony: formData.company,
        message: formData.requirements,
      });

      console.log({
        from_name: formData.name,
        from_email: formData.email,
        from_compony: formData.company,
        message: formData.requirements,
      });
      // Reset form after successful submission
      setFormData({
        name: "",
        company: "",
        email: "",
        requirements: "",
      });
      setErrors({});
    } catch (err) {
      if (err instanceof z.ZodError) {
        const validationErrors: any = {};
        err.errors.forEach((error) => {
          validationErrors[error.path[0]] = error.message;
        });
        setErrors(validationErrors);
      }
    }
  };

  return (
    <div
      className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10"
      data-animate
    >
      <h3 className="text-2xl font-semibold mb-6 text-white">
        Request a Quote
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-white/80 mb-2 font-medium"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name} // Controlled input
            className={`w-full px-4 py-3 bg-white/10 border ${
              errors.name ? "border-red-500" : "border-white/20"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-white/50`}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="company"
            className="block text-white/80 mb-2 font-medium"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            onChange={handleChange}
            value={formData.company} // Controlled input
            className={`w-full px-4 py-3 bg-white/10 border ${
              errors.company ? "border-red-500" : "border-white/20"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-white/50`}
            placeholder="Your Company"
          />
          {errors.company && <p className="text-red-500">{errors.company}</p>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-white/80 mb-2 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email} // Controlled input
            className={`w-full px-4 py-3 bg-white/10 border ${
              errors.email ? "border-red-500" : "border-white/20"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-white/50`}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label
            htmlFor="requirements"
            className="block text-white/80 mb-2 font-medium"
          >
            Project Requirements
          </label>
          <textarea
            id="requirements"
            name="requirements"
            onChange={handleChange}
            value={formData.requirements} // Controlled input
            rows={4}
            className={`w-full px-4 py-3 bg-white/10 border ${
              errors.requirements ? "border-red-500" : "border-white/20"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-white/50`}
            placeholder="Describe your project requirements, including pipe specifications, quantity, and timeline"
          ></textarea>
          {errors.requirements && (
            <p className="text-red-500">{errors.requirements}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors w-full font-medium"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default Contact;
