import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard.vue'

const mockProduct = {
  id: 1,
  nama: 'Kue Panda',
  harga: 18000,
  gambar: 'https://i.imgur.com/b79Qh6u.jpg'
}

describe('ProductCard.vue', () => {
  it('menampilkan data produk dengan benar', () => {
    const wrapper = mount(ProductCard, {
      props: { product: mockProduct }
    })

    expect(wrapper.text()).toContain('Kue Panda')
    expect(wrapper.text()).toContain('18000')
    expect(wrapper.find('img').attributes('src')).toBe(mockProduct.gambar)
  })

  it('memicu event saat tombol Tambah diklik', async () => {
    const wrapper = mount(ProductCard, {
      props: { product: mockProduct }
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('add-to-cart')).toBeTruthy()
    expect(wrapper.emitted('add-to-cart')[0][0]).toEqual(mockProduct)
  })
})
