import { motion } from "framer-motion";

function SlideIn({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: "left" | "right";
}) {
  const x = direction === "left" ? -100 : 100;

  return (
    <>
      <motion.div
        style={{ marginTop: "20vh", marginBottom: "20vh" }}
        initial={{ x: x, opacity: 0.1 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ amount: "some", once: true }}
        layout
      >
        {children}
      </motion.div>
    </>
  );
}

export default SlideIn;
