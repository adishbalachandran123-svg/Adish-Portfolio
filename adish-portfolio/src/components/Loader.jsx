import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <div className="font-mono text-sm text-mute mb-4">initializing_portfolio.sh</div>
          <div className="flex items-center gap-2 font-display text-2xl sm:text-3xl text-paper">
            <span>whoami</span>
            <motion.span
              className="text-cyan"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              _
            </motion.span>
          </div>
          <motion.div
            className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-white/10"
          >
            <motion.div
              className="h-full w-full bg-gradient-to-r from-cyan to-violet"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
