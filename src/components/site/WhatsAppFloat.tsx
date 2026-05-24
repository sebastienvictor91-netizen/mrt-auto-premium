import { motion } from "framer-motion";

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/33746271955"
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter sur WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-success text-white pl-4 pr-5 py-3.5 rounded-full shadow-card-hover hover:shadow-petrol transition-smooth"
    >
      <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-20" />
      <svg viewBox="0 0 32 32" className="relative h-6 w-6 fill-white">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.385.696 4.6 1.891 6.471L4 29l7.731-1.838A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3zm0 21.6c-1.84 0-3.553-.514-5.012-1.405l-.36-.214-4.59 1.091 1.111-4.476-.235-.367A9.55 9.55 0 0 1 6.4 15c0-5.292 4.309-9.6 9.6-9.6 5.293 0 9.601 4.308 9.601 9.6 0 5.293-4.308 9.6-9.601 9.6zm5.276-7.157c-.289-.144-1.711-.844-1.977-.94-.265-.097-.458-.144-.65.144-.193.289-.745.94-.913 1.133-.168.193-.337.217-.626.072-.289-.144-1.22-.45-2.323-1.435-.859-.766-1.439-1.713-1.608-2.002-.169-.289-.018-.444.127-.588.131-.13.289-.337.434-.506.144-.169.193-.289.289-.482.097-.193.048-.362-.024-.506-.072-.144-.65-1.566-.891-2.144-.234-.563-.474-.486-.65-.494l-.554-.01a1.07 1.07 0 0 0-.771.362c-.265.289-1.012.99-1.012 2.412 0 1.422 1.036 2.797 1.18 2.99.144.193 2.04 3.115 4.943 4.367.691.299 1.23.477 1.65.611.693.22 1.323.189 1.822.115.556-.083 1.711-.7 1.953-1.376.241-.676.241-1.256.169-1.376-.072-.12-.265-.193-.554-.337z"/>
      </svg>
      <span className="relative text-sm font-medium hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
}
