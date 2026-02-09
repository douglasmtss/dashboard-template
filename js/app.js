// app.js
// Entry point for UI logic
import { renderHeader } from './header.js';
import { renderFooter } from './footer.js';
import { renderSidebar } from './sidebar.js';
import { renderMainContent } from './mainContent.js';

$(document).ready(function() {
//   renderHeader($('#main-header')[0]);
//   renderFooter($('#main-footer')[0]);
  renderSidebar($('#sidebar')[0]);
  renderMainContent($('#main-content')[0]);
  $(window).on('hashchange', function() {
    renderMainContent($('#main-content')[0]);
  });
});
