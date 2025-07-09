import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('LoginView.vue', () => {
  it('menampilkan form login', () => {
    const wrapper = mount(LoginView)
    expect(wrapper.find('h2').text().toLowerCase()).toContain('login')
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('memproses login ketika tombol ditekan', async () => {
    const mockPush = vi.fn()
    vi.stubGlobal('localStorage', {
      setItem: vi.fn(),
      getItem: vi.fn(() => 'true'),
      removeItem: vi.fn()
    })

    const wrapper = mount(LoginView, {
      global: {
        mocks: {
          $router: { push: mockPush }
        }
      }
    })

    await wrapper.find('input[type="text"]').setValue('admin')
    await wrapper.find('input[type="password"]').setValue('admin')
    await wrapper.find('form').trigger('submit.prevent')

    expect(localStorage.setItem).toHaveBeenCalledWith('isLoggedIn', 'true')
    expect(mockPush).toHaveBeenCalledWith('/admin')
  })
})
