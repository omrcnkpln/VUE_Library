import { describe, it, expect } from 'vitest'
import Preview from '../Preview.vue';

describe('Preview', () => {
    it('should list gifs', () => {
      const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
      expect(wrapper.text()).toContain('Hello Vitest')
    })
  })