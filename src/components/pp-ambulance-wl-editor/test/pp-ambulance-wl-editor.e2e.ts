import { newE2EPage } from '@stencil/core/testing';

describe('pp-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-ambulance-wl-editor></pp-ambulance-wl-editor>');

    const element = await page.find('pp-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
