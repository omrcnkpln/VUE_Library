import { describe, it, expect, test } from 'vitest';
import Preview from '../Preview.vue';
import { mount } from '@vue/test-utils';

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })

describe('Preview', () => {
  it('should list gifs', () => { //act

    //arrange
    const propData = [
      { images: { fixed_height: { url: 'foo.gif' } } },
      { images: { fixed_height: { url: 'foo.gif' } } }
    ];

    const wrapper = mount(Preview, { props: { gifs: propData } });

    // const propCount = wrapper.props().gifs.length;
    const propCount = wrapper.props('gifs').length;
    const liCount = wrapper.findAll('li').length;
    const imgCount = wrapper.find('li').findAll("img").length; // find must not allow to get length
    const imgSrc = wrapper.find('li').find("img").attributes().src;

    // console.log(wrapper.html());
    // console.log(wrapper.props());

    //asert
    expect(propCount).toBe(2);
    expect(liCount).to.equal(2);
    expect(imgCount).to.equal(1);
    expect(imgSrc).to.equal("foo.gif");
  })
})