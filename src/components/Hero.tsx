import { ArrowRight, BarChart3, Check, QrCode, ReceiptText, ShoppingBag, UtensilsCrossed } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../config/site'
import { track } from '../lib/analytics'
import { scrollToId } from '../lib/utils'

function ProductMockup() {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, scale: 0.94, rotateY: -4 }}
      animate={reduce ? undefined : { opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative mx-auto w-full max-w-[620px] [perspective:1200px]"
    >
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--sapo-blue)]/15 blur-[90px]" />
      <div className="relative overflow-hidden rounded-[26px] border border-white/12 bg-[#0b1018] p-3 shadow-[0_40px_120px_rgba(0,0,0,.55)] sm:p-4">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-2 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/8" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/32">Sapo FnB • Live view</span>
        </div>

        <div className="grid gap-3 pt-3 md:grid-cols-[1.18fr_.82fr]">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-white/42">Doanh thu hôm nay</div>
                <div className="mt-1 text-2xl font-bold text-white">18.640.000đ</div>
              </div>
              <BarChart3 className="h-5 w-5 text-[var(--sapo-blue-light)]" />
            </div>
            <div className="flex h-28 items-end gap-2 rounded-xl bg-[#07101c] px-3 pb-3 pt-6">
              {[32, 44, 38, 58, 52, 78, 64, 88, 74, 94].map((height, index) => (
                <motion.span
                  key={index}
                  initial={reduce ? undefined : { height: 8 }}
                  animate={reduce ? undefined : { height: `${height}%` }}
                  transition={{ delay: 0.55 + index * 0.04, duration: 0.55 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-[var(--sapo-blue)]/35 to-[var(--sapo-blue-light)]"
                  style={reduce ? { height: `${height}%` } : undefined}
                />
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {[
                ['Đơn', '126'],
                ['Bàn', '24'],
                ['Đang xử lý', '08'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-2 py-2.5">
                  <div className="text-sm font-semibold text-white">{value}</div>
                  <div className="mt-0.5 text-[10px] text-white/38">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
              <div className="flex items-center justify-between text-xs text-white/42">
                <span>Order #A128</span>
                <span className="rounded-full bg-[var(--sapo-blue)]/12 px-2 py-1 text-[var(--sapo-blue-light)]">Bếp đang làm</span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.05]"><UtensilsCrossed size={14} /></span><span className="text-sm text-white/78">Cơm bò sốt tiêu</span></div>
                <div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.05]"><ShoppingBag size={14} /></span><span className="text-sm text-white/78">Trà đào cam sả</span></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4"><QrCode className="h-5 w-5 text-[var(--sapo-blue-light)]" /><div className="mt-6 text-xs font-semibold text-white">QR order</div><div className="mt-1 text-[10px] text-white/38">Tại bàn</div></div>
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4"><ReceiptText className="h-5 w-5 text-[var(--sapo-blue-light)]" /><div className="mt-6 text-xs font-semibold text-white">Thanh toán</div><div className="mt-1 text-[10px] text-white/38">Đồng bộ bill</div></div>
            </div>
          </div>
        </div>
      </div>

      <motion.div animate={reduce ? undefined : { y: [0, -5, 0] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute -left-4 top-[28%] hidden rounded-2xl border border-white/10 bg-[#0a0f16]/94 px-3 py-2.5 shadow-2xl backdrop-blur md:block">
        <div className="flex items-center gap-2 text-xs font-medium text-white"><Check className="h-4 w-4 text-[var(--sapo-blue-light)]" /> Đơn hàng đồng bộ</div>
      </motion.div>
      <motion.div animate={reduce ? undefined : { y: [0, 5, 0] }} transition={{ duration: 5.5, repeat: Infinity }} className="absolute -right-4 bottom-[18%] hidden rounded-2xl border border-white/10 bg-[#0a0f16]/94 px-3 py-2.5 shadow-2xl backdrop-blur sm:block">
        <div className="flex items-center gap-2 text-xs font-medium text-white"><BarChart3 className="h-4 w-4 text-[var(--sapo-blue-light)]" /> Doanh thu realtime</div>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="top" className="hero-grid relative flex min-h-[96vh] items-center overflow-hidden pb-20 pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(0,131,255,.13),transparent_34%),radial-gradient(circle_at_20%_10%,rgba(255,255,255,.035),transparent_25%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[.93fr_1.07fr] lg:px-8">
        <div className="max-w-2xl">
          <motion.div initial={reduce ? undefined : { opacity: 0, y: 14 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,131,255,.24)] bg-[rgba(0,131,255,.08)] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--sapo-blue-light)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--sapo-blue-light)] shadow-[0_0_12px_var(--sapo-blue-light)]" />
            Sapo FnB • Giải pháp quản lý & bán hàng
          </motion.div>

          <motion.h1 initial={reduce ? undefined : { opacity: 0, y: 24 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className="mt-7 text-balance text-[clamp(2.65rem,6vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.055em] text-white">
            Vận hành quán thông minh. <span className="gradient-text">Kiểm soát kinh doanh</span> dễ dàng hơn.
          </motion.h1>

          <motion.p initial={reduce ? undefined : { opacity: 0, y: 20 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }} className="mt-6 max-w-xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
            Quản lý nhà hàng, cafe, trà sữa, tiệm bánh, bida, karaoke và bar/pub — từ order, bếp/bar, thanh toán đến kho và báo cáo.
          </motion.p>

          <motion.p initial={reduce ? undefined : { opacity: 0 }} animate={reduce ? undefined : { opacity: 1 }} transition={{ duration: 0.7, delay: 0.24 }} className="mt-4 text-sm font-medium text-white/78">
            Tư vấn & triển khai cùng <span className="text-white">Trung Trực — Sapo Miền Tây</span>
          </motion.p>

          <motion.div initial={reduce ? undefined : { opacity: 0, y: 18 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => { track('click_hero_cta'); scrollToId('lead') }}
              className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[var(--sapo-blue)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(0,131,255,.3)] transition hover:-translate-y-0.5 hover:bg-[var(--sapo-blue-light)]"
            >
              Đăng ký tư vấn miễn phí <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <a
              href={site.zalo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('click_zalo', { location: 'hero' })}
              className="inline-flex min-h-13 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[rgba(0,131,255,.35)] hover:bg-white/[0.07]"
            >
              Chat Zalo ngay
            </a>
          </motion.div>

          <motion.div initial={reduce ? undefined : { opacity: 0 }} animate={reduce ? undefined : { opacity: 1 }} transition={{ delay: 0.4 }} className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/38">
            {['Tư vấn 1:1', 'Demo theo mô hình thực tế', 'Hỗ trợ triển khai'].map((item) => <span key={item} className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" />{item}</span>)}
          </motion.div>
        </div>

        <ProductMockup />
      </div>
    </section>
  )
}
