<template>
  <main-layout>
    <div class="header-area">
		<h2>Calendar and Events</h2>
	</div>
	<div class="body-area">
		<iframe src="https://calendar.google.com/calendar/embed?showDate=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=oiuvespacce64dgfmenvdm7rkc%40group.calendar.google.com&amp;color=%235F6B02&amp;ctz=America%2FNew_York" style="border-width:0; width: 100%; height: auto; min-height: 800px;" frameborder="0" scrolling="no"></iframe>
	</div>
  </main-layout>
</template>

<style scoped>
@-moz-document domain('calendar.google.com') {
  /* Colors */

  :root {
    --GR-BLACK: #000;
    --GR-BLUE1: #515b62;
    --GR-BLUE2: #3b424a;
    --GR-BLUE3: #40474d;
    --GR-BLUE4: #30373d;
    --GR-BLUE5: #20272d;
    --GR-GRAY1: #f7f8f9;
    --GR-WHITE: #fff;
  }

  /* General */

  body {
    background: var(--GR-BLUE3) !important;
  }

  /* Icons */
  .gb_yc svg,
  .gb_kc svg,
  .rF3YF,
  .DPvwYc {
    color: var(--GR-WHITE) !important;
  }

  /* Black Icons */
  .azQ4Lc.pka1xd .rXgejc.kFTWo,
  /* "My Calendars" popover + Icon */
    .i5a7ie
    .rF3YF:not(.wmyjXb)
    .DPvwYc.NhjcAb,
  /* Event Popover Header Icons */ .krHqHb .DPvwYc {
    color: var(--GR-BLACK) !important;
  }

  /* Checkmarks */
  .MbUTNc,
  .Ii6cVc {
    border-color: var(--GR-BLACK) !important;
  }

  /* Header */

  .gb_7d {
    background: linear-gradient(
      to bottom,
      var(--GR-BLUE1),
      var(--GR-BLUE3)
    ) !important;
  }

  /* Overall Header */
  .gb_7d,
  /* Calendar Range */ .KaL5Wc,
  /* Calendar Type */ .Cd9hpd .NlWrkb {
    color: var(--GR-WHITE) !important;
  }

  /* Main Content */

  body[data-viewfamily='EVENT'] .TOTjfb,
  body[data-viewfamily='SEARCH'] .TOTjfb {
    border-top: 0 !important;
  }

  /* Left Sidebar */
  .hEtGGf {
    border-color: var(--GR-BLUE1) !important;
  }

  /* Section Dividers */
  .T8CF3c,
  .qZvm2d-clz4Ic {
    border-color: var(--GR-BLUE1) !important;
  }

  /* Mini-Calendar Month */
  .MSZkRb,
  /* Mini-Calendar Day of the Week */ .zRt28b,
  /* Mini-Calendar Day Circle Text (Out of Range) */ .uGtG7d,
  /* Mini-Calendar Day Circle Text (In range) */ .iMprOe {
    color: var(--GR-WHITE) !important;
  }

  /* Mini-Calendar Rows */
  .W0m3G::before {
    background: transparent !important;
  }

  /* Mini-Calendar Day Circle */
  .W0m3G .r4nke {
    background: var(--GR-BLUE5) !important;
  }

  /* Mini-Calendar Day Circle (Selected) */
  .i8dSE .r4nke,
  .i8dSE + .i8dSE::before {
    background: var(--GR-BLUE1) !important;
  }

  /* Mini-Calendar Day Circle Text (Out of Range) */
  .uGtG7d {
    opacity: 0.5 !important;
  }

  /* "Add a friend's calendar" Wrapper */
  .IIB0tc .ULpymb {
    background: transparent !important;
  }

  /* "Add a friend's calendar" placeholder text */
  .ULpymb .snByac {
    color: var(--GR-WHITE) !important;
    opacity: 0.6 !important;
  }

  /* "Add a friend's calendar" Input */
  .whsOnd {
    color: var(--GR-WHITE) !important;
  }

  /* Calendars Group Title */
  .uQ1ixe .snByac {
    color: var(--GR-WHITE) !important;
  }

  .I2LGc:hover {
    background: var(--GR-BLUE4) !important;
  }

  /* Calendar Name */
  .NI2kfb {
    color: var(--GR-WHITE) !important;
  }

  /* Calendar Checkbox (unchecked) */
  .uHMk6b {
    border-color: var(--GR-BLUE4) !important;
  }

  /* Calendar Body */
  .tNDBE {
    background: var(--GR-BLUE5) !important;
  }

  /* Schedule */

  /* Today's Date */
  .OmwDud.F262Ye {
    color: var(--GR-WHITE) !important;
  }

  /* Section */
  .L1Ysrb {
    border-color: var(--GR-BLUE1) !important;
    color: var(--GR-WHITE) !important;
  }

  /* Current Event */
  .dtaVuc.UflSff {
    color: var(--GR-WHITE) !important;
  }

  /* Day */

  .OCQPo {
    background: transparent !important;
  }

  /* Time Column */
  .Gk2izd,
  .GENA3c {
    background: var(--GR-BLUE3) !important;
    border-color: var(--GR-BLUE1) !important;
  }

  /* Text */
  .pCoqfc,
  .MANBAf {
    color: var(--GR-WHITE) !important;
  }

  /* Grid Borders */
  .H7IzGb,
  .SU7tYb,
  .yEkOpe,
  .G5v83e,
  .YvjgZe,
  .mmsF1c::after {
    border-color: var(--GR-BLUE1) !important;
  }

  /* Calendar Name */
  .mdzkGf {
    color: var(--GR-WHITE) !important;
  }

  /* Week */

  .v83gc {
    background: var(--GR-BLUE3) !important;
  }

  /* Current Day Row */
  .SU7tYb.F262Ye,
  .YvjgZe.F262Ye::after,
  .yEkOpe.F262Ye {
    background: var(--GR-BLUE4) !important;
  }

  /* Day Title */
  .MmhHI.N4XV7d {
    color: var(--GR-WHITE) !important;
  }

  /* Monthly */

  /* Grid Lines */
  .t8qpF,
  .PhLhOd,
  .QIadxc {
    border-color: var(--GR-BLUE1) !important;
  }

  /* Week Day Header */
  .wy3aMe {
    color: var(--GR-WHITE) !important;
  }

  /* Day Number Header */
  .YK7obe {
    color: var(--GR-WHITE) !important;
    opacity: 0.8 !important;
  }

  /* Current Day */
  .ecKr0,
  .ef2wWc {
    background: var(--GR-BLUE3) !important;
  }

  /* Time Event */
  .g3dbUc.smECzc,
  .g3dbUc.smECzc.UflSff {
    color: var(--GR-WHITE) !important;
  }

  /* Time & Day Event (Past) */
  .g3dbUc.UflSff {
    opacity: 0.5 !important;
  }

  /* Day Event (Past) Black Text */
  .g3dbUc.qqMC3e {
    color: var(--GR-BLACK) !important;
  }
  /* Day Event (Past) White Text */
  .UflSff .g3dbUc {
    color: var(--GR-BLACK) !important;
  }

  /* Tasks Right Sidebar */
  .lzc0vb {
    border-color: var(--GR-BLUE1) !important;
  }

  /* Collapse Button */
  .BWsMTe {
    background: var(--GR-BLUE2) !important;
    border-color: var(--GR-BLUE1) !important;
  }

  /* Event Popover */

  .JtukPc {
    background: var(--GR-BLUE3) !important;
  }

  /* "Mark as done" Text */
  .xPejqf {
    color: var(--GR-WHITE) !important;
  }

  /* Create Event Popover */

  /* Title Input */
  .ndJi5d,
  .shdZ7e .zHQkBf {
    color: var(--GR-WHITE) !important;
  }

  /* Placeholder */
  .ndJi5d {
    opacity: 0.5 !important;
  }

  /* Event/Task Button */
  .qmv2fc.kaAt2 {
    color: var(--GR-WHITE) !important;
    border-color: var(--GR-BLUE1) !important;
  }

  /* Date Input */
  .BvQsje,
  .gHQcAb,
  .Kb2sf {
    background: transparent !important;
  }

  .WpDZC,
  .DSC0Mc,
  .YKfFKe {
    color: var(--GR-WHITE) !important;
  }

  /* All Day Checkbox */
  .ETkhPe {
    color: var(--GR-WHITE) !important;
  }

  /* Calendar Selector */
  .jZ0DTb {
    background: var(--GR-BLUE4) !important;
  }

  .jgvuAb:not(.iWO5td) .jT5e9 {
    color: var(--GR-WHITE) !important;
  }

  /* More Options */
  .nYqxP {
    color: var(--GR-WHITE) !important;
  }

  /* Create Event Page */

  .p9lUpf {
    background: transparent !important;
  }

  /* Header */
  .NkK3Fc.PTLZrb .gb_8d {
    background: transparent !important;
  }

  /* "Add Title */
  .bojM1c {
    color: var(--GR-WHITE) !important;
    opacity: 0.5 !important;
  }

  /* Checkboxes */
  .p9lUpf .uVccjd {
    border-color: var(--GR-WHITE) !important;
  }

  /* Unselected Tab */
  .ThdJC {
    color: var(--GR-WHITE) !important;
  }

  /* Calendar Selector */
  .FpmPAb {
    background: var(--GR-BLUE4) !important;
  }

  /* Description Box */
  .lR3h6d {
    background: var(--GR-BLUE4) !important;
  }

  /* Select Text */
  .GfgKp:not(.iWO5td) .mZytBb,
  .GfgKp:not(.iWO5td) .MocG8c {
    color: var(--GR-WHITE) !important;
  }

  /* "Guests Can" */
  .hGcgEd {
    color: var(--GR-WHITE) !important;
  }

  /* "Add Video Call", "Add Notification" */
  .BTV3qc .snByac,
  .rhtYVe .snByac {
    color: var(--GR-WHITE) !important;
    opacity: 0.5 !important;
  }

  /* "Add Description" */
  .lR3h6d .snByac {
    color: var(--GR-WHITE) !important;
    opacity: 0.5 !important;
  }

  #CghhOe0 {
    color: var(--GR-WHITE) !important;
  }

  /* "Today" button in "Find a time" */
  .RveJvd.snByac {
    color: var(--GR-WHITE) !important;
  }

  /* Current date range in "Find a time" */
  .oPF3Ce {
    color: var(--GR-WHITE) !important;
  }

  /* Custom Recurrence Dialog */
  .g3VIld {
    background: var(--GR-BLUE1) !important;
    color: var(--GR-WHITE) !important;
  }
}
</style>

<script>
import MainLayout from '../layouts/Main.vue';

export default {
  components: {
    MainLayout
  }
};
</script>

