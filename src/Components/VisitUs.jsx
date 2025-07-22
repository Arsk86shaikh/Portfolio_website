import { motion } from "framer-motion";

export default function VisitUs() {
  return (
    <motion.section
      id="Contact" 
      className="py-20 bg-gradient-to-b from-white via-red-50 to-white px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold text-red-700 mb-10 text-center">
         Visit Laziz Pizza
      </h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
        {/* Address Block */}
        <motion.div
          className="flex-1 bg-white rounded-2xl  border border-gray-200 flex flex-col justify-center items-center p-8 text-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <div>
              <p className="text-xl font-bold text-red-700 mb-1">
                Laziz Pizza, Khaja Colony
              </p>
              <p className="text-gray-700 text-lg">
                Jintur Road, Parbhani Locality, Parbhani, Maharashtra 431401
              </p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">
                📞 <span className="text-red-600">+91-9284378472</span>
              </p>
            </div>
          
          </div>
        </motion.div>
        {/* Embedded Google Map */}
        <motion.div
          className="flex-1 rounded-2xl overflow-hidden  border-gray-200 min-h-[320px] flex bg-gray-100"
          initial={{ scale: 0.95, opacity: 0, x: 40 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ delay: 0.36, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Laziz Pizza Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2800343!2d76.7745246!3d18.8522019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd10e2e9b43e68f%3A0x2e6e8b7e5e3f0f6a!2sKhaja%20Colony%2C%20Jintur%20Rd%2C%20Parbhani%2C%20Maharashtra%20431401%2C%20India!5e0!3m2!1sen!2sin!4v1721557900000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 320, backgroundColor: "#f3f4f6" }} // light gray bg
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
}