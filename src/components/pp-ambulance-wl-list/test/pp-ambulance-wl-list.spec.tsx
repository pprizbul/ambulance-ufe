import { newSpecPage } from '@stencil/core/testing';
import { PpAmbulanceWlList } from '../pp-ambulance-wl-list';

describe('pp-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpAmbulanceWlList],
      html: `<pp-ambulance-wl-list></pp-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-ambulance-wl-list>
    `);
  });
});
