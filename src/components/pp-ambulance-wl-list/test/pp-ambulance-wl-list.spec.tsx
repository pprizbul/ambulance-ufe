import { newSpecPage } from '@stencil/core/testing';
import { PpAmbulanceWlList } from '../pp-ambulance-wl-list';

describe('pp-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpAmbulanceWlList],
      html: `<pp-ambulance-wl-list></pp-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as PpAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
