"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaStar, FaCheckCircle } from "react-icons/fa";

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WriteReviewModal({ isOpen, onClose }: WriteReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!rating || !name || !email || !review) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Review submitted:", { rating, name, email, review });

    setSubmitSuccess(true);
    
    // Reset and close after showing success
    setTimeout(() => {
      setRating(0);
      setName("");
      setEmail("");
      setReview("");
      setSubmitSuccess(false);
      onClose();
    }, 2000);

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-amber-400/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-amber-400 transition-colors"
            aria-label="Close modal"
          >
            <FaTimes size={24} />
          </button>

          {submitSuccess ? (
            <div className="text-center py-12">
              <FaCheckCircle className="text-6xl text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300">Your review has been submitted successfully.</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-amber-400 mb-2">Write a Review</h2>
              <p className="text-gray-300 mb-6">Share your experience with Elysium Equine</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Rating */}
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-3">
                    Your Rating *
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <FaStar
                          size={32}
                          className={`${
                            star <= (hoverRating || rating)
                              ? "text-amber-400"
                              : "text-gray-600"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="review-name" className="block text-sm font-semibold text-gray-200 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="review-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="review-email" className="block text-sm font-semibold text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="review-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="john@example.com"
                  />
                  <p className="text-xs text-gray-500 mt-1">Your email will not be published</p>
                </div>

                {/* Review Text */}
                <div>
                  <label htmlFor="review-text" className="block text-sm font-semibold text-gray-200 mb-2">
                    Your Review *
                  </label>
                  <textarea
                    id="review-text"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none"
                    placeholder="Tell us about your experience..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !rating}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                    isSubmitting || !rating
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-amber-400 hover:bg-amber-500 text-black"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
