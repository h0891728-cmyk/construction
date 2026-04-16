/**
 * All 33 project images from Saraswati Construction and Enterprise.
 * Using lh3.googleusercontent.com format which works without CORS issues
 * when embedded in <img> tags.
 *
 * ⚠️ IMPORTANT: Each file MUST be shared as "Anyone with the link → Viewer" in Google Drive.
 */

// lh3 CDN format: works as <img> src without CORS issues
const GD = (id: string) =>
  `https://lh3.googleusercontent.com/d/${id}`;

export const IMGS = {
  // Electrical / Substation
  e1: GD('1gwNdOvLDHP0mxPizL1aybJU1vbRKm1ge'),  // img 01
  e2: GD('1OEJWmYBwBn1ufOqGli2sp4GNozfkkA8y'),  // img 02
  e3: GD('1kV8mw6ynaw7uaZP_K-qJAQ60YB-7Zn97'),  // img 03
  e4: GD('1u6llkQ9xdcdKknIPN0KDAX7bQ2awd400'),  // img 04
  e5: GD('1-0XTzpWqsqUZUdqtHORg-__4sAlfqdau'),  // img 05
  e6: GD('1Hqa_rC6K8-Hyk1ssGphDFCZUELOuHGdI'),  // img 06

  // Highway / Crash Barrier
  h1: GD('1HhYxt71Z3xo_UnmpeXVWSDl6NaTFGAdb'),  // img 07
  h2: GD('1Lg5nADjBLeGonHn6boboTIwZQVHEqUHH'),  // img 08
  h3: GD('1xAXexm_7cx2qpiDkFVpaBcxVXrDHhji5'),  // img 09
  h4: GD('14REpmBdY4Jp3dHmnGJ5TwRR_nxeuaRkJ'),  // img 10
  h5: GD('1Qb-65vgqu07x6oGy1ye-5_HrR6wa_jrZ'),  // img 11

  // Civil Construction
  c1: GD('1bIC5JtEFZYWiW1-Q3mj-a9RuXfHhf4m2'),  // img 12
  c2: GD('1JktmVr2qoGaBlvu6h_dV8VvxFuKnmo6K'),  // img 13
  c3: GD('1M-u7PrmE3CqRCLZ60T9gBuDjCqP985lC'),  // img 14
  c4: GD('1nwzMzdEgkyVinLLhflLRhBbEkrfOw2Tq'),  // img 15

  // Solar
  s1: GD('1OCYZBefuBkTnwlHVfil8jtSjZglQpOd0'),  // img 16
  s2: GD('1UKzPXbWxQaZTCnXeiZfM_m2Ug44I1VDN'),  // img 17
  s3: GD('1Ro_RD6j8wdbjDiBW8cNGRw6MTZOVD7Pb'),  // img 18
  s4: GD('104OS5jVBqXMfoKsVM3c8rt1_JiiHlDkj'),  // img 19

  // Team / Site Work
  t1: GD('1n6gASO8eXpVt_Rzjdu99F6wVgZ_vl10l'),  // img 20
  t2: GD('1687fTD-kWbrHzEX12aOegs68TcZUA6rv'),  // img 21
  t3: GD('1PET1d-OM1mzx94yxmyn_lA4j8lgp_Kb1'),  // img 22
  t4: GD('1CxhbXd7sotTQcZNxkykivgH5bDg-_MW0'),  // img 23

  // Equipment / Machinery
  m1: GD('1KkBypNpjMxxtylRhFw4A-w6D7zH5QUQe'),  // img 24
  m2: GD('1XPrExFqhjz-R4sXeHlkuxsU6_QxktSCA'),  // img 25
  m3: GD('1_6H2w75hTXC4IASSaFLz34ROphs4AleB'),  // img 26
  m4: GD('1s3uavJVkt_EpLDaVKN-x60pd6fijmbE4'),  // img 27

  // Additional Site Photos
  a1: GD('1cZqmMDWGk5TtwYrTyVKs4nptR8wt6jgE'),  // img 28
  a2: GD('1Wp0AbOkbqvDTQV9Y_9L0KH0gryIS06kj'),  // img 29
  a3: GD('15rJCY-ui5lol04As6_27xrcFB7B8FxG9'),  // img 30
  a4: GD('1lFj3sFzF9FwfoqW1IU9KbITPyG-8CKl0'),  // img 31
  a5: GD('1AO62RChH7Fj4McSlenH47aPzfYolVARV'),  // img 32
  a6: GD('1e7EFYrz2oqX0W-UwC8LSRRP3bst5MIKG'),  // img 33
};

export const SVC_IMGS = {
  transformer: 'https://www.dfliq.net/wp-content/uploads/2018/10/Installing-a-transformer.jpg',
  waterTank: 'https://i.ibb.co/HDxPmJcS/water-tank.jpg', // Updated
  crashBarrier: 'https://cpimg.tistatic.com/11654038/b/4/3-mm-Highway-W-Beam-Metal-Crash-Barrier..webp',
  solar: 'https://www.loomsolar.com/cdn/shop/articles/solar_installation_18-10_1200x.jpg?v=1686660448',
  cabling: 'https://www.kei-ind.com/wp-content/uploads/2022/04/blog-hv-power-cables-2.jpg',
  procurement: './material_supply_procurement_1776332272507.png', // Generated image
};

export const SPECIFIC_IMGS = {
  mohan: 'https://i.ibb.co/C568mmY3/mohan-img.jpg',
  narayan: 'https://i.ibb.co/d0w1Fkqz/narayan-img.jpg',
  substation_33_11: 'https://i.ibb.co/q3s5SQPB/33l11-KV.jpg',
  tunnel: 'https://i.ibb.co/LXbGgLGw/tunnel.jpg',
  building: 'https://5.imimg.com/data5/SELLER/Default/2025/2/490843602/SD/GY/QM/210711554/building-construction-service.jpg',
  ev_plant: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qci9enViUrAsK653wbkvdfQ7-8P6Ho_VHQ&s',
};

export const CLIENT_LOGOS = {
  csptcl: 'https://joblive.in/wp-content/uploads/2022/08/CSPTCL-Chhattisgarh-State-Power-Transmission-Company-Limited.jpg',
  railway: 'https://mycareersview.com/afile/mcv14286_114865-ir.jpg',
  mpptcl: 'https://media.licdn.com/dms/image/v2/C510BAQHrkvSB-mtpNg/company-logo_200_200/company-logo_200_200/0/1630599594286/madhya_pradesh_power_transmission_company_limited_logo?e=2147483647&v=beta&t=fFxVudf6E2uKseL6HGKjXwsne5HVxox86hFMlhg5TtI',
  mppwd: 'https://play-lh.googleusercontent.com/A9_kEz_Z4dQ1R6wG_klUoryzfwCNWNMwBJGqJ5EhgyzxNz6owrkpsNgeF9ke3FhCtkY',
  drstechno: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3etadwYtyvyfK0-xFRff_j5VQXxN3-Lz3iA&s',
};
