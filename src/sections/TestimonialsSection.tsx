import { motion } from "framer-motion";
import { MessageCircle, Users } from "lucide-react";

const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/LKHNCYz05MrA0j6uX272Zc";
const WHATSAPP_DIRECT = "https://wa.me/8801865385348";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 px-4"
      style={{ backgroundColor: "#151b3d" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#f4b942" }}
          >
            Community
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-white"
          >
            Join Our Customer Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-3 text-sm max-w-xl mx-auto"
            style={{ color: "#c9ceda" }}
          >
            Ask questions, share experiences, and get real-time help from other AI Premium Shop customers on WhatsApp.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.a
            href={WHATSAPP_COMMUNITY}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center text-center p-8 rounded-2xl border cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: "rgba(37,211,102,0.06)",
              borderColor: "rgba(37,211,102,0.25)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(37,211,102,0.15)" }}
            >
              <Users className="w-8 h-8" style={{ color: "#25d366" }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp Community</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#c9ceda" }}>
              Connect with other AI users in Bangladesh. Share tips, ask questions, and get peer support on which tools work best.
            </p>
            <span
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-opacity group-hover:opacity-90"
              style={{ backgroundColor: "#25d366", color: "#fff" }}
            >
              <Users className="w-4 h-4" />
              Join Community
            </span>
          </motion.a>

          <motion.a
            href={WHATSAPP_DIRECT}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center text-center p-8 rounded-2xl border cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: "rgba(244,185,66,0.05)",
              borderColor: "rgba(244,185,66,0.2)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(244,185,66,0.1)" }}
            >
              <MessageCircle className="w-8 h-8" style={{ color: "#f4b942" }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ask Us Anything</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#c9ceda" }}>
              Unsure which plan is right for you? Message us on WhatsApp. We'll recommend the right tool for your specific work and budget — no sales pressure.
            </p>
            <span
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-opacity group-hover:opacity-90"
              style={{ backgroundColor: "#f4b942", color: "#0a0e27" }}
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
