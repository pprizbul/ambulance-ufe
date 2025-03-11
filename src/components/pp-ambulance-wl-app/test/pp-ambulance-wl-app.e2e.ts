import { newE2EPage } from '@stencil/core/testing';

describe('pp-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-ambulance-wl-app></pp-ambulance-wl-app>');

    const element = await page.find('pp-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
