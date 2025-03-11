import { newSpecPage } from '@stencil/core/testing';
import { PpAmbulanceWlApp } from '../pp-ambulance-wl-app';

describe('pp-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [PpAmbulanceWlApp],
      html: `<pp-ambulance-wl-app base-path="/"></pp-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("pp-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [PpAmbulanceWlApp],
      html: `<pp-ambulance-wl-app base-path="/ambulance-wl/"></pp-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("pp-ambulance-wl-list");
  });
});