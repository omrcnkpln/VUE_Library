import { render, screen } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import View from '../View.vue';

// describe('HelloWorld', () => {
//     it('renders properly', () => {
//         const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//         expect(wrapper.text()).toContain('Hello Vitest')
//     })
// })

describe('View', () => {
    const viewText = 'Hello From View'

    // it.only
    // it.skip
    it("render span correctly", async () => {
        // arrange
        const viewId = 'viewId';
        render(View, {
            props: { element: "div", id: viewId },
            slots: { default: viewText }
        })

        const view = await screen.findByText(viewText);
        // asert
        expect(view.id).toBe(viewId);
        expect(view.innerHTML).toBe(viewText);
        expect(view.nodeName).toBe("DIV");
    })

    it("snap shot matches", () => {
        const wrapper = render(View, { props: { element: "div" } });
        expect(wrapper).toMatchSnapshot();
    })
});


