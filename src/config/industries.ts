export type IndustryKey =
  | 'restaurant'
  | 'cafe'
  | 'milkTea'
  | 'bakery'
  | 'billiards'
  | 'karaoke'
  | 'bar'

export type Industry = {
  key: IndustryKey
  name: string
  eyebrow: string
  accent: string
  description: string
  features: string[]
  metrics: { label: string; value: string }[]
}

export const industries: Industry[] = [
  {
    key: 'restaurant',
    name: 'Nhà hàng',
    eyebrow: 'PHỤC VỤ TẠI BÀN',
    accent: 'Order → Bếp → Thu ngân',
    description: 'Đồng bộ toàn bộ luồng phục vụ từ sơ đồ bàn, gọi món đến thanh toán và báo cáo.',
    features: ['Order tại bàn', 'QR order', 'Sơ đồ bàn', 'Bếp / bar', 'Thanh toán', 'Kho nguyên liệu', 'Báo cáo', 'Quản lý từ xa'],
    metrics: [
      { label: 'Trạng thái bàn', value: 'Live' },
      { label: 'Luồng order', value: 'Đồng bộ' },
    ],
  },
  {
    key: 'cafe',
    name: 'Cafe',
    eyebrow: 'NHANH & LINH HOẠT',
    accent: 'Quầy + Bàn + Mang đi',
    description: 'Tối ưu order nhanh, thanh toán đa dạng, quản lý ca, nguyên liệu và khách hàng thành viên.',
    features: ['Order nhanh', 'QR order', 'Bar / bếp', 'Thanh toán', 'Quản lý ca', 'Nguyên liệu', 'Khách hàng', 'Theo dõi từ xa'],
    metrics: [
      { label: 'Thiết bị', value: 'Đa nền tảng' },
      { label: 'Vận hành', value: 'Offline-ready' },
    ],
  },
  {
    key: 'milkTea',
    name: 'Trà sữa',
    eyebrow: 'NHIỀU TUỲ CHỌN',
    accent: 'Size + Topping + Tem',
    description: 'Giảm nhầm món khi đông khách bằng cấu hình size, topping, in tem, tích điểm và quản lý nguyên liệu.',
    features: ['Size', 'Topping', 'In tem', 'In bill', 'Order nhanh', 'Nguyên liệu', 'QR thanh toán', 'Tích điểm'],
    metrics: [
      { label: 'Tuỳ chọn món', value: 'Linh hoạt' },
      { label: 'Tem / bill', value: 'Tức thời' },
    ],
  },
  {
    key: 'bakery',
    name: 'Tiệm bánh',
    eyebrow: 'HÀNG HOÁ & ĐƠN ĐẶT',
    accent: 'Online + Offline',
    description: 'Theo dõi hàng hoá, đơn đặt bánh, nguyên vật liệu và dữ liệu khách hàng trên một hệ thống.',
    features: ['Hàng hoá', 'Đơn đặt bánh', 'Kho', 'Khách hàng', 'Nhân viên', 'Doanh thu', 'Online + Offline', 'Chuỗi chi nhánh'],
    metrics: [
      { label: 'Đơn đặt', value: 'Tập trung' },
      { label: 'Tồn kho', value: 'Theo dõi' },
    ],
  },
  {
    key: 'billiards',
    name: 'Bida',
    eyebrow: 'TÍNH GIỜ CHÍNH XÁC',
    accent: 'Bàn + Thời gian + F&B',
    description: 'Quản lý trạng thái bàn, tính tiền theo thời gian và order đồ ăn/uống ngay tại bàn.',
    features: ['Sơ đồ bàn', 'Trạng thái bàn', 'Tính giờ', 'Giá theo khung giờ', 'Order tại bàn', 'Chuyển bar', 'Offline', 'Doanh thu'],
    metrics: [
      { label: 'Thời gian chơi', value: 'Realtime' },
      { label: 'Trạng thái', value: 'Rõ ràng' },
    ],
  },
  {
    key: 'karaoke',
    name: 'Karaoke',
    eyebrow: 'PHÒNG & DỊCH VỤ',
    accent: 'Phòng + Giờ + Order',
    description: 'Theo dõi phòng, tính giờ, order đồ ăn/uống và thanh toán trong một quy trình thống nhất.',
    features: ['Quản lý phòng', 'Trạng thái phòng', 'Tính giờ', 'Giá theo khung giờ', 'Order', 'Bar', 'Thanh toán', 'Offline'],
    metrics: [
      { label: 'Phòng hoạt động', value: 'Live' },
      { label: 'Tính giờ', value: 'Tự động' },
    ],
  },
  {
    key: 'bar',
    name: 'Bar / Pub',
    eyebrow: 'GIỜ CAO ĐIỂM',
    accent: 'Order nhanh + Bar workflow',
    description: 'Tập trung order, bàn, bill, kho đồ uống, nhân viên và báo cáo trong ca tối.',
    features: ['Order nhanh', 'Sơ đồ bàn', 'Bar / kitchen', 'Bill', 'Thanh toán', 'Kho đồ uống', 'Nhân viên', 'Doanh thu'],
    metrics: [
      { label: 'Ca vận hành', value: 'Liên tục' },
      { label: 'Kết nối', value: 'Offline-ready' },
    ],
  },
]
