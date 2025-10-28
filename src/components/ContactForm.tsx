"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaComment, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  date?: string;
  message?: string;
}

const services = [
  "Horse Training",
  "Riding Lessons",
  "Horse Boarding",
  "Facility Tour",
  "Event Booking",
  "Other Inquiry",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10+ digits)";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call (replace with actual email integration later)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", formData);
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
          <FaUser className="inline mr-2 text-amber-400" />
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
            errors.name
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-700 focus:ring-amber-400"
          }`}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-400 flex items-center">
            <FaExclamationCircle className="mr-1" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
          <FaEnvelope className="inline mr-2 text-amber-400" />
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
            errors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-700 focus:ring-amber-400"
          }`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-400 flex items-center">
            <FaExclamationCircle className="mr-1" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-2">
          <FaPhone className="inline mr-2 text-amber-400" />
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
            errors.phone
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-700 focus:ring-amber-400"
          }`}
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p className="mt-2 text-sm text-red-400 flex items-center">
            <FaExclamationCircle className="mr-1" />
            {errors.phone}
          </p>
        )}
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-200 mb-2">
          Service Interest *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
            errors.service
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-700 focus:ring-amber-400"
          }`}
        >
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-2 text-sm text-red-400 flex items-center">
            <FaExclamationCircle className="mr-1" />
            {errors.service}
          </p>
        )}
      </div>

      {/* Date Field */}
      <div>
        <label htmlFor="date" className="block text-sm font-semibold text-gray-200 mb-2">
          <FaCalendar className="inline mr-2 text-amber-400" />
          Preferred Date (Optional)
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2">
          <FaComment className="inline mr-2 text-amber-400" />
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-700 focus:ring-amber-400"
          }`}
          placeholder="Tell us about your inquiry..."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-400 flex items-center">
            <FaExclamationCircle className="mr-1" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
          isSubmitting
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-amber-400 hover:bg-amber-500 text-black"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>

      {/* Success/Error Messages */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 flex items-center"
        >
          <FaCheckCircle className="mr-3 text-xl" />
          <div>
            <p className="font-semibold">Message sent successfully!</p>
            <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
          </div>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 flex items-center"
        >
          <FaExclamationCircle className="mr-3 text-xl" />
          <div>
            <p className="font-semibold">Something went wrong!</p>
            <p className="text-sm">Please try again or contact us directly.</p>
          </div>
        </motion.div>
      )}
    </form>
  );
}
