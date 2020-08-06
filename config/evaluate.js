/*
Flags and points go in this file
*/

module.exports = function (key, level) {
    keys = [
      "1s_7h15_7hE_31Gh7h_c1rc13",
      "a11tt13fact15wo2thawho1311mboofd23am5",
      "s3X_i5_7h3_c0Ns0l4t10n_y0u_s33k_Wh3N_y0u_c4n7_H4V3_l0v3",
      "7hou_5hou1d57_ea7_7o_1ive_no7_1ive_7o_ea7",
      "7he_h19hes7_weal7h_1s_7he_a8sence_0f_9reed",
      "1t5_my_53cr3t_capta1n_1_am_alway5_angry",
      "Pr0GR3s$_7h1s_Gr8_h3reSy_0f_d3CaY",
      "7h3_SiGH7_0f_b100d_70_Cr0wD_B3gEtS_7h3_7hiRsT_0f_m0r3",
      "Und3r_7hAt_sH0w_l1Es_7h3_t3rr1bLe_W3iGH7_0f_HiS_D3cEiT",
      "N0_kN1f3_7h4t_cut5_So_5hArPly_W1Th_5UcH_P01sOn3d_BLaD3_aS_7R3aCh3rY",
    ];

    points = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

    console.log(level);
    console.log(key);
    console.log(keys[level]);
    if (level < 10 && level>=0 && key === 'dante{'+keys[level]+'}') {
        return points[level];
    } else {
        return 0;
    }
}
