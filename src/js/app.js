// app.js
// Entry point for UI logic
import { renderHeader } from './layout/header.js';
import { renderFooter } from './layout/footer.js';
import { renderSidebar } from './layout/sidebar.js';
import { renderMainContent } from './layout/mainContent.js';

// configs
import { sidebarConfig } from "./config/sidebarConfig.js";

$(document).ready(function() {
//   renderHeader($('#main-header')[0]);
//   renderFooter($('#main-footer')[0]);
  renderSidebar($('#sidebar'), sidebarConfig);
  // renderMainContent($('#main-content')[0]);
  $(window).on('hashchange', function() {
    renderMainContent($('#main-content')[0]);
  });
});
