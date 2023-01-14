import { describe, it, expect, beforeEach, test } from 'vitest';
import Search from '../Search.vue';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';

describe('Search', () => {

    let wrapper;
    let inputAtFirst;

    beforeEach(() => {
        //arrange
        wrapper = mount(Search);
        inputAtFirst = wrapper.findAll('input').at(0); // nth olarak degil class ya da test id ile testler yapilmalidir
    });

    it('should be instantiated', () => {//act
        // console.log(wrapper.html());
        // console.log(inputAtFirst.html());
        // console.log(inputAtFirst.attributes());

        //asert
        expect(wrapper.vm.query).to.equal('');
        expect(inputAtFirst.exists());
    });

    // test the function
    it('should emit event when button is clicked', async () => { //act
        const button = await wrapper.find('button');
        await button.trigger('click');
        await nextTick();
        expect(wrapper.emitted().searchRequested[0][0]).toBe("");

        // console.log(wrapper.emitted());
    });

    it('should update query when input value changed', async () => { //act
        const textInput = wrapper.find('input[type="text"]')
        await textInput.setValue('Hello')

        expect(wrapper.find('input[type="text"]').element.value).toBe('Hello')

        // console.log(wrapper.emitted());
    });
})