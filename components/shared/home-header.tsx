import { motion } from "framer-motion";

export default function HomeHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-4 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
      <p className="mx-auto max-w-175 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}
