TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A",
          "yaw": -88.05,
          "distance": 1,
          "backwardYaw": -148.35
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907",
             "yaw": -74.44,
             "distance": 1,
             "backwardYaw": 83.66
            }
           ],
           "hfov": 360,
           "id": "panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E",
           "class": "Panorama",
           "pitch": 0,
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E_t.jpg",
           "label": "10 (8)",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E_t.jpg",
             "overlays": [
              {
               "bleachingDistance": 0.4,
               "id": "overlay_0DD0D32B_0090_8F9E_4181_9B3F4D2ACDB4",
               "class": "LensFlarePanoramaOverlay",
               "yaw": -140.56,
               "bleaching": 0.7,
               "pitch": 73.42
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_237E483F_0191_99F7_4184_92FD21E21E89",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 21.14,
                 "yaw": -74.44,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 200,
                    "width": 188,
                    "url": "media/panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -4.26
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907, this.camera_26ECF78D_0191_969A_4173_BADFCD4A44C5); this.mainPlayList.set('selectedIndex', 25)"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -74.44,
                 "hfov": 21.14,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 403,
                    "width": 378,
                    "url": "media/panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -4.26
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E.jpeg"
               }
              ]
             }
            }
           ],
           "partial": false,
           "hfovMax": 120,
           "vfov": 180
          },
          "yaw": 83.66,
          "distance": 1,
          "backwardYaw": -74.44
         }
        ],
        "hfov": 360,
        "id": "panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907",
        "class": "Panorama",
        "pitch": 0,
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907_t.jpg",
        "label": "10 (12)",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907_t.jpg",
          "overlays": [
           {
            "bleachingDistance": 0.4,
            "id": "overlay_0DC5D6E4_0091_7689_4173_0A740D4AE5DB",
            "class": "LensFlarePanoramaOverlay",
            "yaw": -128,
            "bleaching": 0.7,
            "pitch": 77.94
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_134C5051_0090_898A_4160_AA2EAAFFF08D",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 17.3,
              "yaw": 83.66,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 121,
                 "width": 154,
                 "url": "media/panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -3.71
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E, this.camera_2681F6AF_0191_9697_4180_2D3BE843ECC8); this.mainPlayList.set('selectedIndex', 21)"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 83.66,
              "hfov": 17.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 242,
                 "width": 309,
                 "url": "media/panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -3.71
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_135BA163_0091_8B8F_4180_04B5BE7547B9",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 17.55,
              "yaw": -88.05,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 134,
                 "width": 157,
                 "url": "media/panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -3.71
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A, this.camera_268B0692_0191_9689_416B_A8581A4A9FF6); this.mainPlayList.set('selectedIndex', 22)"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -88.05,
              "hfov": 17.55,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 269,
                 "width": 314,
                 "url": "media/panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -3.71
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907.jpeg"
            }
           ]
          }
         }
        ],
        "partial": false,
        "hfovMax": 120,
        "vfov": 180
       },
       "yaw": -148.35,
       "distance": 1,
       "backwardYaw": -88.05
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A",
          "yaw": 78.88,
          "distance": 1,
          "backwardYaw": -17.33
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C",
             "yaw": 46.1,
             "distance": 1,
             "backwardYaw": -113.3
            }
           ],
           "hfov": 360,
           "id": "panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D",
           "class": "Panorama",
           "pitch": 0,
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D_t.jpg",
           "label": "10 (11)",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D_t.jpg",
             "overlays": [
              {
               "bleachingDistance": 0.4,
               "id": "overlay_0DD01E9B_0090_96BE_4181_42A2F482364A",
               "class": "LensFlarePanoramaOverlay",
               "yaw": -131.77,
               "bleaching": 0.7,
               "pitch": 74.42
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_1022C14A_0091_8B99_414A_5EC43B995598",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 14.54,
                 "yaw": 46.1,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 116,
                    "width": 130,
                    "url": "media/panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -3.45
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C, this.camera_27E9295D_0191_9BBA_4172_5B67E897AF24); this.mainPlayList.set('selectedIndex', 23)"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 46.1,
                 "hfov": 14.54,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 233,
                    "width": 260,
                    "url": "media/panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -3.45
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D.jpeg"
               }
              ]
             }
            }
           ],
           "partial": false,
           "hfovMax": 120,
           "vfov": 180
          },
          "yaw": -113.3,
          "distance": 1,
          "backwardYaw": 46.1
         }
        ],
        "hfov": 360,
        "id": "panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C",
        "class": "Panorama",
        "pitch": 0,
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C_t.jpg",
        "label": "10 (10)",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C_t.jpg",
          "overlays": [
           {
            "bleachingDistance": 0.4,
            "id": "overlay_0DE8F41C_0090_89BA_4178_470711F46FEC",
            "class": "LensFlarePanoramaOverlay",
            "yaw": -142.07,
            "bleaching": 0.7,
            "pitch": 74.42
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_10813F82_009F_B68E_4172_44DC57A701AA",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 14.82,
              "yaw": 78.88,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 116,
                 "width": 132,
                 "url": "media/panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -0.44
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A, this.camera_218D9A07_0191_9996_417A_7E7D5C48FA53); this.mainPlayList.set('selectedIndex', 22)"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 78.88,
              "hfov": 14.82,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 233,
                 "width": 264,
                 "url": "media/panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -0.44
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_10F6A3BB_0090_8EFF_417F_3E61A1777E56",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 12.31,
              "yaw": -113.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 114,
                 "width": 110,
                 "url": "media/panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": 0.19
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D, this.camera_21863A13_0191_998E_4160_ECD4E6252239); this.mainPlayList.set('selectedIndex', 24)"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -113.3,
              "hfov": 12.31,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 228,
                 "width": 220,
                 "url": "media/panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C_0_HS_1_0.png"
                }
               ]
              },
              "pitch": 0.19
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C.jpeg"
            }
           ]
          }
         }
        ],
        "partial": false,
        "hfovMax": 120,
        "vfov": 180
       },
       "yaw": -17.33,
       "distance": 1,
       "backwardYaw": 78.88
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81",
       "yaw": 174.72,
       "distance": 1,
       "backwardYaw": -0.38
      }
     ],
     "hfov": 360,
     "id": "panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A",
     "class": "Panorama",
     "pitch": 0,
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A_t.jpg",
     "label": "10 (9)",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A_t.jpg",
       "overlays": [
        {
         "bleachingDistance": 0.4,
         "id": "overlay_0DF97B54_0090_BF8A_416E_26FFBAEFDC58",
         "class": "LensFlarePanoramaOverlay",
         "yaw": -145.08,
         "bleaching": 0.7,
         "pitch": 72.41
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_131927EF_0091_7696_4170_93EA084FA144",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 21.1,
           "yaw": -148.35,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 150,
              "width": 188,
              "url": "media/panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -1.07
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907, this.camera_21448631_0191_898A_416F_1E6327EAD8BA); this.mainPlayList.set('selectedIndex', 25)"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -148.35,
           "hfov": 21.1,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 300,
              "width": 377,
              "url": "media/panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -1.07
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_103CC185_0090_8A8A_4159_8BE702E220B2",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 21.19,
           "yaw": -17.33,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 154,
              "width": 190,
              "url": "media/panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -7.1
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C, this.camera_217EE63F_0191_89F6_4160_826491C53E3F); this.mainPlayList.set('selectedIndex', 23)"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -17.33,
           "hfov": 21.19,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 309,
              "width": 381,
              "url": "media/panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -7.1
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_22428FA5_0070_B68A_417B_3D4ED925F16A",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.54,
           "yaw": 174.72,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 67,
              "width": 67,
              "url": "media/panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -0.19
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81, this.camera_2177964B_0191_899E_4180_513D7B862B73); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 174.72,
           "hfov": 7.54,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 134,
              "width": 134,
              "url": "media/panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -0.19
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A.jpeg"
         }
        ]
       }
      }
     ],
     "partial": false,
     "hfovMax": 120,
     "vfov": 180
    },
    "yaw": -0.38,
    "distance": 1,
    "backwardYaw": 174.72
   }
  ],
  "hfov": 360,
  "id": "panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81",
  "class": "Panorama",
  "pitch": -0.13,
  "hfovMin": 32,
  "thumbnailUrl": "media/panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81_t.jpg",
  "label": "[Group 2]-IMG_0939_IMG_0995-46 images",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81_t.jpg",
    "overlays": [
     {
      "bleachingDistance": 0.4,
      "id": "overlay_12792475_0090_898B_414A_CDBF1A59CFF4",
      "class": "LensFlarePanoramaOverlay",
      "yaw": 90.06,
      "bleaching": 0.7,
      "pitch": 47.44
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_175B9667_0091_8996_4176_569114EC5370",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.29,
        "yaw": -164.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 101,
           "width": 118,
           "url": "media/panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -3.42
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -164.8,
        "hfov": 13.29,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 202,
           "width": 237,
           "url": "media/panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -3.42
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_14C9B17B_00B0_8A7E_4173_6988FF9E6ED4",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.54,
        "yaw": 88.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 67,
           "width": 67,
           "url": "media/panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 0.47
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 88.81,
        "hfov": 7.54,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 134,
           "url": "media/panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 0.47
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_22FD2DE8_0070_BA9A_416D_DF6669E0755E",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.48,
        "yaw": -0.38,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 118,
           "width": 112,
           "url": "media/panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 6.37
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A, this.camera_216ED657_0191_89B6_4164_7B9D1A3E16E7); this.mainPlayList.set('selectedIndex', 22)"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -0.38,
        "hfov": 12.48,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 237,
           "width": 224,
           "url": "media/panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 6.37
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3138,
       "width": 6434,
       "url": "media/panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1569,
       "width": 3217,
       "url": "media/panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "vfov": 175.54
 },
 {
  "buttonZoomOut": {
   "borderRadius": 0,
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_0DB7C02F_0090_8996_415C_C595EA7F2724_pressed.png",
   "class": "IconButton",
   "rollOverIconURL": "skin/IconButton_0DB7C02F_0090_8996_415C_C595EA7F2724_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "shadow": false,
   "paddingRight": 0,
   "minWidth": 0,
   "minHeight": 0,
   "id": "IconButton_0DB7C02F_0090_8996_415C_C595EA7F2724",
   "iconURL": "skin/IconButton_0DB7C02F_0090_8996_415C_C595EA7F2724.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "buttonPlayRight": {
   "borderRadius": 0,
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_0DB8302F_0090_8996_4162_E919BCB697C3_pressed.png",
   "class": "IconButton",
   "rollOverIconURL": "skin/IconButton_0DB8302F_0090_8996_4162_E919BCB697C3_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "shadow": false,
   "paddingRight": 0,
   "minWidth": 0,
   "minHeight": 0,
   "id": "IconButton_0DB8302F_0090_8996_4162_E919BCB697C3",
   "iconURL": "skin/IconButton_0DB8302F_0090_8996_4162_E919BCB697C3.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "buttonMoveDown": {
   "borderRadius": 0,
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_0DB8102F_0090_8996_4178_50CB47180A10_pressed.png",
   "class": "IconButton",
   "rollOverIconURL": "skin/IconButton_0DB8102F_0090_8996_4178_50CB47180A10_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "shadow": false,
   "paddingRight": 0,
   "minWidth": 0,
   "minHeight": 0,
   "id": "IconButton_0DB8102F_0090_8996_4178_50CB47180A10",
   "iconURL": "skin/IconButton_0DB8102F_0090_8996_4178_50CB47180A10.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "buttonPlayLeft": {
   "borderRadius": 0,
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_0DB7902F_0090_8996_40C1_604C62D17100_pressed.png",
   "class": "IconButton",
   "rollOverIconURL": "skin/IconButton_0DB7902F_0090_8996_40C1_604C62D17100_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "shadow": false,
   "paddingRight": 0,
   "minWidth": 0,
   "minHeight": 0,
   "id": "IconButton_0DB7902F_0090_8996_40C1_604C62D17100",
   "iconURL": "skin/IconButton_0DB7902F_0090_8996_40C1_604C62D17100.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "gyroscopeEnabled": true,
  "buttonPause": {
   "borderRadius": 0,
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "mode": "toggle",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_0DB8402F_0090_8996_4180_9D68E7239C13_pressed.png",
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "shadow": false,
   "paddingRight": 0,
   "minWidth": 0,
   "minHeight": 0,
   "id": "IconButton_0DB8402F_0090_8996_4180_9D68E7239C13",
   "iconURL": "skin/IconButton_0DB8402F_0090_8996_4180_9D68E7239C13.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonRestart": {
   "borderRadius": 0,
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_0DB7E02F_0090_8996_416A_8FD9B26CA8E1_pressed.png",
   "class": "IconButton",
   "rollOverIconURL": "skin/IconButton_0DB7E02F_0090_8996_416A_8FD9B26CA8E1_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "shadow": false,
   "paddingRight": 0,
   "minWidth": 0,
   "minHeight": 0,
   "id": "IconButton_0DB7E02F_0090_8996_416A_8FD9B26CA8E1",
   "iconURL": "skin/IconButton_0DB7E02F_0090_8996_416A_8FD9B26CA8E1.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "buttonZoomIn": {
   "borderRadius": 0,
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_0DB8C02F_0090_8996_4161_E9121B04633D_pressed.png",
   "class": "IconButton",
   "rollOverIconURL": "skin/IconButton_0DB8C02F_0090_8996_4161_E9121B04633D_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "shadow": false,
   "paddingRight": 0,
   "minWidth": 0,
   "minHeight": 0,
   "id": "IconButton_0DB8C02F_0090_8996_4161_E9121B04633D",
   "iconURL": "skin/IconButton_0DB8C02F_0090_8996_4161_E9121B04633D.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonMoveLeft": {
   "borderRadius": 0,
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_0DB7802F_0090_8996_4170_259D4A0FACD4_pressed.png",
   "class": "IconButton",
   "rollOverIconURL": "skin/IconButton_0DB7802F_0090_8996_4170_259D4A0FACD4_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "shadow": false,
   "paddingRight": 0,
   "minWidth": 0,
   "minHeight": 0,
   "id": "IconButton_0DB7802F_0090_8996_4170_259D4A0FACD4",
   "iconURL": "skin/IconButton_0DB7802F_0090_8996_4170_259D4A0FACD4.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "buttonMoveRight": {
   "borderRadius": 0,
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_0DB8002F_0090_8996_417B_2178368E20B0_pressed.png",
   "class": "IconButton",
   "rollOverIconURL": "skin/IconButton_0DB8002F_0090_8996_417B_2178368E20B0_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "shadow": false,
   "paddingRight": 0,
   "minWidth": 0,
   "minHeight": 0,
   "id": "IconButton_0DB8002F_0090_8996_417B_2178368E20B0",
   "iconURL": "skin/IconButton_0DB8002F_0090_8996_417B_2178368E20B0.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "preloadEnabled": false,
  "buttonMoveUp": {
   "borderRadius": 0,
   "paddingLeft": 0,
   "width": 40,
   "height": 40,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_0DB8502F_0090_8996_4165_205C49DCDBE8_pressed.png",
   "class": "IconButton",
   "rollOverIconURL": "skin/IconButton_0DB8502F_0090_8996_4165_205C49DCDBE8_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "shadow": false,
   "paddingRight": 0,
   "minWidth": 0,
   "minHeight": 0,
   "id": "IconButton_0DB8502F_0090_8996_4165_205C49DCDBE8",
   "iconURL": "skin/IconButton_0DB8502F_0090_8996_4165_205C49DCDBE8.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  }
 },
 {
  "id": "panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 114.85,
   "pitch": 14.56
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20",
                "yaw": 3.46,
                "distance": 1,
                "backwardYaw": -158.8
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484",
                   "yaw": 97.03,
                   "distance": 1,
                   "backwardYaw": -79.05
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5",
                         "yaw": -79.97,
                         "distance": 1,
                         "backwardYaw": 114.55
                        }
                       ],
                       "hfov": 360,
                       "id": "panorama_F6B45FEE_FF97_F699_41D8_DE7240342067",
                       "class": "Panorama",
                       "pitch": 0,
                       "hfovMin": 60,
                       "thumbnailUrl": "media/panorama_F6B45FEE_FF97_F699_41D8_DE7240342067_t.jpg",
                       "label": "2.4",
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_F6B45FEE_FF97_F699_41D8_DE7240342067_t.jpg",
                         "overlays": [
                          {
                           "bleachingDistance": 0.4,
                           "id": "overlay_121F1684_0097_B68A_4174_2B88D6FD0338",
                           "class": "LensFlarePanoramaOverlay",
                           "yaw": 58.16,
                           "bleaching": 0.7,
                           "pitch": 26.44
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_21F1B78C_0191_769A_4173_4E19F2CC8E4A",
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 13.79,
                             "yaw": -79.97,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 123,
                                "width": 123,
                                "url": "media/panorama_F6B45FEE_FF97_F699_41D8_DE7240342067_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -4.49
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5, this.camera_2635D806_0191_9989_4180_7B2D89383FA0); this.mainPlayList.set('selectedIndex', 11)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -79.97,
                             "hfov": 13.79,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 247,
                                "width": 247,
                                "url": "media/panorama_F6B45FEE_FF97_F699_41D8_DE7240342067_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -4.49
                            }
                           ]
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 3217,
                            "width": 6434,
                            "url": "media/panorama_F6B45FEE_FF97_F699_41D8_DE7240342067_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_F6B45FEE_FF97_F699_41D8_DE7240342067.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "partial": false,
                       "hfovMax": 120,
                       "vfov": 180
                      },
                      "yaw": 114.55,
                      "distance": 1,
                      "backwardYaw": -79.97
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3",
                      "yaw": 4.84,
                      "distance": 1,
                      "backwardYaw": 10.83
                     }
                    ],
                    "hfov": 360,
                    "id": "panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5",
                    "class": "Panorama",
                    "pitch": 0,
                    "hfovMin": 60,
                    "thumbnailUrl": "media/panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5_t.jpg",
                    "label": "2",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_1CA33F80_0071_968A_415D_D33140549580",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.79,
                          "yaw": 114.55,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 123,
                             "width": 123,
                             "url": "media/panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -4.49
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_F6B45FEE_FF97_F699_41D8_DE7240342067, this.camera_2784D8FD_0191_9A7A_417F_6EBA5247D4A6); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 114.55,
                          "hfov": 13.79,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 247,
                             "width": 247,
                             "url": "media/panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -4.49
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_1D33F7AA_0071_969E_4171_9F395EBA063B",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.65,
                          "yaw": 4.84,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 123,
                             "width": 123,
                             "url": "media/panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -9.1
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3, this.camera_27B7B919_0191_9BBA_4167_4DB92F8412A4); this.mainPlayList.set('selectedIndex', 8)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 4.84,
                          "hfov": 13.65,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 247,
                             "width": 247,
                             "url": "media/panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -9.1
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_219C7D30_019F_BB89_4179_94EE71CAF402",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.7,
                          "yaw": -125.15,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 123,
                             "width": 123,
                             "url": "media/panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -7.72
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -125.15,
                          "hfov": 13.7,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 247,
                             "width": 247,
                             "url": "media/panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -7.72
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 3217,
                         "width": 6434,
                         "url": "media/panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "partial": false,
                    "hfovMax": 120,
                    "vfov": 180
                   },
                   "yaw": 10.83,
                   "distance": 1,
                   "backwardYaw": 4.84
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD",
                         "yaw": -85.51,
                         "distance": 1,
                         "backwardYaw": 70.76
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804",
                            "yaw": 2.07,
                            "distance": 1,
                            "backwardYaw": 9.45
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_F699315A_FFB0_8BB9_41B9_F1706F088431",
                               "yaw": -89.19,
                               "distance": 1,
                               "backwardYaw": -176.54
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2",
                                  "yaw": 2.54,
                                  "distance": 1,
                                  "backwardYaw": 2.54
                                 }
                                ],
                                "hfov": 360,
                                "id": "panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6",
                                "class": "Panorama",
                                "pitch": 0,
                                "hfovMin": 60,
                                "thumbnailUrl": "media/panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6_t.jpg",
                                "label": "10 (1)",
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6_t.jpg",
                                  "overlays": [
                                   {
                                    "bleachingDistance": 0.4,
                                    "id": "overlay_0DC74F2B_0097_B79E_417A_C6A21041F2DA",
                                    "class": "LensFlarePanoramaOverlay",
                                    "yaw": -88.3,
                                    "bleaching": 0.7,
                                    "pitch": 18.9
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_1A497D59_0090_9BBA_4181_7C4BA163A56C",
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 13.79,
                                      "yaw": 2.54,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 123,
                                         "width": 123,
                                         "url": "media/panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -4.03
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2, this.camera_278BB8DC_0191_9ABB_4170_9E66C41A4DEA); this.mainPlayList.set('selectedIndex', 15)"
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 2.54,
                                      "hfov": 13.79,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 247,
                                         "width": 247,
                                         "url": "media/panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -4.03
                                     }
                                    ]
                                   }
                                  ],
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "height": 3217,
                                     "width": 6434,
                                     "url": "media/panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6_hq.jpeg"
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "height": 1608,
                                     "width": 3217,
                                     "url": "media/panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "partial": false,
                                "hfovMax": 120,
                                "vfov": 180
                               },
                               "yaw": 2.54,
                               "distance": 1,
                               "backwardYaw": 2.54
                              }
                             ],
                             "hfov": 360,
                             "id": "panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2",
                             "class": "Panorama",
                             "pitch": 0,
                             "hfovMin": 60,
                             "thumbnailUrl": "media/panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2_t.jpg",
                             "label": "10 (2)",
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2_t.jpg",
                               "overlays": [
                                {
                                 "bleachingDistance": 0.4,
                                 "id": "overlay_0DC79794_0097_968A_4180_19147E1EB2EA",
                                 "class": "LensFlarePanoramaOverlay",
                                 "yaw": -131.26,
                                 "bleaching": 0.7,
                                 "pitch": 30.46
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_1A4787DC_0090_B6BA_417F_AE05B48C2686",
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 13.38,
                                   "yaw": 2.54,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 123,
                                      "width": 123,
                                      "url": "media/panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -14.64
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6, this.camera_27D38939_0191_9BFA_4181_0E7EE71A0202); this.mainPlayList.set('selectedIndex', 14)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 2.54,
                                   "hfov": 13.38,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 247,
                                      "width": 247,
                                      "url": "media/panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -14.64
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_1B6328B3_0091_9A8E_4154_E2365725FDE8",
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 24.61,
                                   "yaw": -89.19,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 163,
                                      "width": 200,
                                      "url": "media/panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -8.64
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_F699315A_FFB0_8BB9_41B9_F1706F088431, this.camera_27A1392E_0191_9B96_4173_14F442FD5BE0); this.mainPlayList.set('selectedIndex', 16)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -89.19,
                                   "hfov": 24.61,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 362,
                                      "width": 444,
                                      "url": "media/panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -8.64
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_201A1874_0190_998A_416D_0F6A79917E58",
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 25.15,
                                   "yaw": 118.92,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 200,
                                      "width": 182,
                                      "url": "media/panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2_0_HS_2_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -7.26
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.mainPlayList.set('selectedIndex', 20)"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 118.92,
                                   "hfov": 25.15,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 494,
                                      "width": 453,
                                      "url": "media/panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -7.26
                                  }
                                 ]
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 3217,
                                  "width": 6434,
                                  "url": "media/panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2_hq.jpeg"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "partial": false,
                             "hfovMax": 120,
                             "vfov": 180
                            },
                            "yaw": -176.54,
                            "distance": 1,
                            "backwardYaw": -89.19
                           }
                          ],
                          "hfov": 360,
                          "id": "panorama_F699315A_FFB0_8BB9_41B9_F1706F088431",
                          "class": "Panorama",
                          "pitch": 0,
                          "hfovMin": 60,
                          "thumbnailUrl": "media/panorama_F699315A_FFB0_8BB9_41B9_F1706F088431_t.jpg",
                          "label": "10 (3)",
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_F699315A_FFB0_8BB9_41B9_F1706F088431_t.jpg",
                            "overlays": [
                             {
                              "bleachingDistance": 0.4,
                              "id": "overlay_0DEF3F8D_0097_969A_4142_1B01A37B1C75",
                              "class": "LensFlarePanoramaOverlay",
                              "yaw": -98.1,
                              "bleaching": 0.7,
                              "pitch": 49.55
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_1A9DFBA9_0091_7E9A_417B_65C3BF7ED842",
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 30.8,
                                "yaw": -176.54,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 176,
                                   "width": 200,
                                   "url": "media/panorama_F699315A_FFB0_8BB9_41B9_F1706F088431_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -4.26
                               }
                              ],
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2, this.camera_269CA66E_0191_8996_4167_28418E04425F); this.mainPlayList.set('selectedIndex', 15)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -176.54,
                                "hfov": 30.8,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 486,
                                   "width": 551,
                                   "url": "media/panorama_F699315A_FFB0_8BB9_41B9_F1706F088431_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -4.26
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_1B246C30_0090_9989_4174_0EEB7B3373AE",
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 13.79,
                                "yaw": 2.07,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 123,
                                   "width": 123,
                                   "url": "media/panorama_F699315A_FFB0_8BB9_41B9_F1706F088431_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -4.03
                               }
                              ],
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804, this.camera_21679662_0191_898E_4179_C872DFEDB442); this.mainPlayList.set('selectedIndex', 17)"
                               }
                              ],
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 2.07,
                                "hfov": 13.79,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 247,
                                   "width": 247,
                                   "url": "media/panorama_F699315A_FFB0_8BB9_41B9_F1706F088431_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -4.03
                               }
                              ]
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "height": 3217,
                               "width": 6434,
                               "url": "media/panorama_F699315A_FFB0_8BB9_41B9_F1706F088431_hq.jpeg"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_F699315A_FFB0_8BB9_41B9_F1706F088431.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "partial": false,
                          "hfovMax": 120,
                          "vfov": 180
                         },
                         "yaw": 9.45,
                         "distance": 1,
                         "backwardYaw": 2.07
                        }
                       ],
                       "hfov": 360,
                       "id": "panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804",
                       "class": "Panorama",
                       "pitch": 0,
                       "hfovMin": 60,
                       "thumbnailUrl": "media/panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804_t.jpg",
                       "label": "10 (4)",
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804_t.jpg",
                         "overlays": [
                          {
                           "bleachingDistance": 0.4,
                           "id": "overlay_0DF89E4B_0090_B99E_414C_319DE489BFF8",
                           "class": "LensFlarePanoramaOverlay",
                           "yaw": -114.43,
                           "bleaching": 0.7,
                           "pitch": 32.47
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_1B931EAD_0093_B69A_4176_7D6601C029B9",
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 22.54,
                             "yaw": 9.45,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 188,
                                "width": 200,
                                "url": "media/panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -12.1
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_F699315A_FFB0_8BB9_41B9_F1706F088431, this.camera_26D7672E_0191_9796_4181_77A8BEBABCA6); this.mainPlayList.set('selectedIndex', 16)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 9.45,
                             "hfov": 22.54,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 387,
                                "width": 411,
                                "url": "media/panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -12.1
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_1920B608_0093_899A_416E_C356F9707758",
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 27.17,
                             "yaw": 150.5,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 189,
                                "width": 200,
                                "url": "media/panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -10.72
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.mainPlayList.set('selectedIndex', 18)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 150.5,
                             "hfov": 27.17,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 469,
                                "width": 494,
                                "url": "media/panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -10.72
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_229A2AC9_0070_BE9B_4167_05ADA39B0D02",
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 22.95,
                             "yaw": -85.51,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 200,
                                "width": 195,
                                "url": "media/panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804_0_HS_2_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -5.19
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD, this.camera_26A5870B_0191_979E_415D_7ED3BB4D6CB8); this.mainPlayList.set('selectedIndex', 13)"
                            }
                           ],
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -85.51,
                             "hfov": 22.95,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 420,
                                "width": 411,
                                "url": "media/panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804_0_HS_2_0.png"
                               }
                              ]
                             },
                             "pitch": -5.19
                            }
                           ]
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 3217,
                            "width": 6434,
                            "url": "media/panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "partial": false,
                       "hfovMax": 120,
                       "vfov": 180
                      },
                      "yaw": 70.76,
                      "distance": 1,
                      "backwardYaw": -85.51
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3",
                      "yaw": -86.89,
                      "distance": 1,
                      "backwardYaw": -26.04
                     }
                    ],
                    "hfov": 360,
                    "id": "panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD",
                    "class": "Panorama",
                    "pitch": 0,
                    "hfovMin": 60,
                    "thumbnailUrl": "media/panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_t.jpg",
                    "label": "3",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_t.jpg",
                      "overlays": [
                       {
                        "bleachingDistance": 0.4,
                        "id": "overlay_0DC093AC_0097_8E9A_417F_238E607359E7",
                        "class": "LensFlarePanoramaOverlay",
                        "yaw": -125.23,
                        "bleaching": 0.7,
                        "pitch": 43.52
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_1C58ADCA_007F_7A9E_4172_280427028EE8",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.8,
                          "yaw": -86.89,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 123,
                             "width": 123,
                             "url": "media/panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": 3.34
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3, this.camera_26A986F0_0191_9689_4151_6393033F6078); this.mainPlayList.set('selectedIndex', 8)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -86.89,
                          "hfov": 13.8,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 247,
                             "width": 247,
                             "url": "media/panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": 3.34
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_1C20BE80_007F_968A_4180_80B81168E5C0",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.81,
                          "yaw": -69.37,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 123,
                             "width": 123,
                             "url": "media/panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -3.11
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.mainPlayList.set('selectedIndex', 9)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -69.37,
                          "hfov": 13.81,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 247,
                             "width": 247,
                             "url": "media/panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -3.11
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_1D80A8CA_0070_BA99_4180_1497E982C923",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.38,
                          "yaw": 155.57,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 123,
                             "width": 123,
                             "url": "media/panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -14.64
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.mainPlayList.set('selectedIndex', 1)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 155.57,
                          "hfov": 13.38,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 247,
                             "width": 247,
                             "url": "media/panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -14.64
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_1DC25793_0071_768E_4176_308EF27D8631",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.83,
                          "yaw": 70.76,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 123,
                             "width": 123,
                             "url": "media/panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_0_HS_3_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": 1.04
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804, this.camera_26BDC6CF_0191_9697_4116_141E81CA3050); this.mainPlayList.set('selectedIndex', 17); this.mainPlayList.set('selectedIndex', 17)"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 70.76,
                          "hfov": 13.83,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 247,
                             "width": 247,
                             "url": "media/panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_0_HS_3_0.png"
                            }
                           ]
                          },
                          "pitch": 1.04
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 3217,
                         "width": 6434,
                         "url": "media/panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "partial": false,
                    "hfovMax": 120,
                    "vfov": 180
                   },
                   "yaw": -26.04,
                   "distance": 1,
                   "backwardYaw": -86.89
                  }
                 ],
                 "hfov": 360,
                 "id": "panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3",
                 "class": "Panorama",
                 "pitch": 0,
                 "hfovMin": 60,
                 "thumbnailUrl": "media/panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3_t.jpg",
                 "label": "2.7",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_1E24A7D8_0070_96B9_4173_D2D19C1729BB",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 13.7,
                       "yaw": 97.03,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 123,
                          "width": 123,
                          "url": "media/panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -7.72
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484, this.camera_2626C827_0191_9997_4181_6623732A3525); this.mainPlayList.set('selectedIndex', 12)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 97.03,
                       "hfov": 13.7,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 247,
                          "width": 247,
                          "url": "media/panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -7.72
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_1F13A57C_0071_8A7A_4143_758AAB3A720C",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 13.78,
                       "yaw": 10.83,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 123,
                          "width": 123,
                          "url": "media/panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 4.72
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5, this.camera_26519842_0191_9989_4160_19C272541682); this.mainPlayList.set('selectedIndex', 11)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 10.83,
                       "hfov": 13.78,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 247,
                          "width": 247,
                          "url": "media/panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": 4.72
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_1F711531_0071_8B8A_416A_CF00214D007A",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 13.83,
                       "yaw": -26.04,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 123,
                          "width": 123,
                          "url": "media/panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -1.27
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD, this.camera_26434865_0191_998B_413C_DF4595EBD9DE); this.mainPlayList.set('selectedIndex', 13)"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -26.04,
                       "hfov": 13.83,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 247,
                          "width": 247,
                          "url": "media/panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -1.27
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "partial": false,
                 "hfovMax": 120,
                 "vfov": 180
                },
                "yaw": -79.05,
                "distance": 1,
                "backwardYaw": 97.03
               }
              ],
              "hfov": 360,
              "id": "panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484",
              "class": "Panorama",
              "pitch": 0,
              "hfovMin": 60,
              "thumbnailUrl": "media/panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484_t.jpg",
              "label": "3.1",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484_t.jpg",
                "overlays": [
                 {
                  "bleachingDistance": 0.4,
                  "id": "overlay_0DCED76C_0097_F799_4181_337C6ACACA1C",
                  "class": "LensFlarePanoramaOverlay",
                  "yaw": -159.15,
                  "bleaching": 0.7,
                  "pitch": 29.71
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_110CF645_0097_898A_4180_3331A99FA9E5",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 13.79,
                    "yaw": 5.53,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 94,
                       "width": 123,
                       "url": "media/panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -3.71
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 5.53,
                    "hfov": 13.79,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 188,
                       "width": 246,
                       "url": "media/panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -3.71
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_150AA5C7_0090_8A96_4147_2D938E4E53A2",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 13.53,
                    "yaw": 3.46,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 123,
                       "width": 123,
                       "url": "media/panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -11.87
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20, this.camera_26C0574C_0191_979A_4181_7938BDB9702A); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 3.46,
                    "hfov": 13.53,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 247,
                       "width": 247,
                       "url": "media/panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -11.87
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_1593E58D_0090_8A9A_417B_CE824A806F72",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 13.64,
                    "yaw": -79.05,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 123,
                       "width": 123,
                       "url": "media/panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -9.56
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3, this.camera_26F3C76D_0191_979A_416D_1FF4419650A6); this.mainPlayList.set('selectedIndex', 8)"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -79.05,
                    "hfov": 13.64,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 247,
                       "width": 247,
                       "url": "media/panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -9.56
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484.jpeg"
                  }
                 ]
                }
               }
              ],
              "partial": false,
              "hfovMax": 120,
              "vfov": 180
             },
             "yaw": -158.8,
             "distance": 1,
             "backwardYaw": 3.46
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C",
             "yaw": 7.29,
             "distance": 1,
             "backwardYaw": -162.16
            }
           ],
           "hfov": 360,
           "id": "panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20",
           "class": "Panorama",
           "pitch": 0,
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20_t.jpg",
           "label": "2.3",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_F188FC6A_FFB0_B99E_41D6_100073C43D45",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 14.08,
                 "yaw": 7.29,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 130,
                    "width": 127,
                    "url": "media/panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -10.49
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C, this.camera_266FF8A0_0191_9A8A_417C_57AA6026A5AC); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 7.29,
                 "hfov": 14.08,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 260,
                    "width": 255,
                    "url": "media/panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -10.49
                }
               ]
              },
              {
               "bleachingDistance": 0.63,
               "id": "overlay_F1DA7D67_FFB1_FB96_41E7_D6B7023E9CCE",
               "class": "LensFlarePanoramaOverlay",
               "yaw": -97.35,
               "bleaching": 0.7,
               "pitch": 46.54
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_15F484F5_0093_8A8A_417A_DA91C6AC94EC",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 13.49,
                 "yaw": -158.8,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 123,
                    "width": 123,
                    "url": "media/panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -12.79
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484, this.camera_267C0884_0191_9A8A_4173_D5C48759B3EE); this.mainPlayList.set('selectedIndex', 12)"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -158.8,
                 "hfov": 13.49,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 247,
                    "width": 247,
                    "url": "media/panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -12.79
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20.jpeg"
               }
              ]
             }
            }
           ],
           "partial": false,
           "hfovMax": 120,
           "vfov": 180
          },
          "yaw": -162.16,
          "distance": 1,
          "backwardYaw": 7.29
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81",
          "yaw": 2.14,
          "distance": 1,
          "backwardYaw": 142.44
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81",
             "yaw": 143.23,
             "distance": 1,
             "backwardYaw": -142.32
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C",
             "yaw": 58.34,
             "distance": 1,
             "backwardYaw": 82.02
            }
           ],
           "hfov": 360,
           "id": "panorama_F6945767_FFB1_7796_41E8_C34FF4311368",
           "class": "Panorama",
           "pitch": 0,
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_F6945767_FFB1_7796_41E8_C34FF4311368_t.jpg",
           "label": "2.9",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_F6945767_FFB1_7796_41E8_C34FF4311368_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_16B89860_0093_998A_4145_2404ECC907C0",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 21.29,
                 "yaw": 58.34,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 137,
                    "width": 190,
                    "url": "media/panorama_F6945767_FFB1_7796_41E8_C34FF4311368_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -4.85
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C, this.camera_27FFB951_0191_9B8A_417F_C46CA71A3BB8); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 58.34,
                 "hfov": 21.29,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 274,
                    "width": 381,
                    "url": "media/panorama_F6945767_FFB1_7796_41E8_C34FF4311368_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -4.85
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_1479B25E_0090_89B9_416F_F4AFF4A1BA7A",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 20.34,
                 "yaw": 143.23,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 157,
                    "width": 182,
                    "url": "media/panorama_F6945767_FFB1_7796_41E8_C34FF4311368_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 5.82
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81, this.camera_27CD4945_0191_9B8A_4177_FDFCF8729666); this.mainPlayList.set('selectedIndex', 6)"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 143.23,
                 "hfov": 20.34,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 315,
                    "width": 365,
                    "url": "media/panorama_F6945767_FFB1_7796_41E8_C34FF4311368_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": 5.82
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_F6945767_FFB1_7796_41E8_C34FF4311368_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_F6945767_FFB1_7796_41E8_C34FF4311368.jpeg"
               }
              ]
             }
            }
           ],
           "partial": false,
           "hfovMax": 120,
           "vfov": 180
          },
          "yaw": 82.02,
          "distance": 1,
          "backwardYaw": 58.34
         }
        ],
        "hfov": 360,
        "id": "panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C",
        "class": "Panorama",
        "pitch": 0,
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_t.jpg",
        "label": "2.2.1",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_F2E9F955_FFB1_9B8A_41C4_0E1C87B861EE",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 28.48,
              "yaw": -162.16,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 106,
                 "width": 200,
                 "url": "media/panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -6.09
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20, this.camera_2154160E_0191_8996_4171_1877AF7D2511); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -162.16,
              "hfov": 28.48,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 273,
                 "width": 511,
                 "url": "media/panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -6.09
             }
            ]
           },
           {
            "bleachingDistance": 0.4,
            "id": "overlay_12134074_0097_8989_4179_E7BFCE30EA8B",
            "class": "LensFlarePanoramaOverlay",
            "yaw": 82.78,
            "bleaching": 0.7,
            "pitch": 56.34
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_1727F809_008F_B99A_4171_6B5E2532F5A5",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.5,
              "yaw": 2.14,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 67,
                 "width": 67,
                 "url": "media/panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -5.72
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81, this.camera_2149A619_0191_89BA_416B_700DC5CF28BC); this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 2.14,
              "hfov": 7.5,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 134,
                 "width": 134,
                 "url": "media/panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -5.72
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_14D4B1ED_00B0_8A9B_417D_83B09437686E",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.54,
              "yaw": 82.02,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 67,
                 "width": 67,
                 "url": "media/panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": 0.31
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_F6945767_FFB1_7796_41E8_C34FF4311368, this.camera_2143E625_0191_898A_4181_719A69E04211); this.mainPlayList.set('selectedIndex', 10)"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 82.02,
              "hfov": 7.54,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 134,
                 "width": 134,
                 "url": "media/panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_0_HS_2_0.png"
                }
               ]
              },
              "pitch": 0.31
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_1E13D926_0091_BB96_417C_DD704C65C141",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 21.2,
              "yaw": -91.96,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 173,
                 "url": "media/panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "pitch": -0.12
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -91.96,
              "hfov": 21.2,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 436,
                 "width": 378,
                 "url": "media/panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -0.12
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C.jpeg"
            }
           ]
          }
         }
        ],
        "partial": false,
        "hfovMax": 120,
        "vfov": 180
       },
       "yaw": 142.44,
       "distance": 1,
       "backwardYaw": 2.14
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80",
       "yaw": -44.94,
       "distance": 1,
       "backwardYaw": -5.4
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_F6945767_FFB1_7796_41E8_C34FF4311368",
       "yaw": -142.32,
       "distance": 1,
       "backwardYaw": 143.23
      }
     ],
     "hfov": 360,
     "id": "panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81",
     "class": "Panorama",
     "pitch": 0,
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81_t.jpg",
     "label": "2.5",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81_t.jpg",
       "overlays": [
        {
         "bleachingDistance": 0.4,
         "id": "overlay_0DC7914C_0097_8B9A_4166_6A468B310A95",
         "class": "LensFlarePanoramaOverlay",
         "yaw": -161.91,
         "bleaching": 0.7,
         "pitch": 67.64
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_110C4C8C_0091_BA99_4106_362F15FCA6C0",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 25.29,
           "yaw": 142.44,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 166,
              "width": 200,
              "url": "media/panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -4.71
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C, this.camera_271B9969_0191_9B9A_4182_B6B0D8B17997); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 142.44,
           "hfov": 25.29,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 377,
              "width": 453,
              "url": "media/panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -4.71
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_171C3AC9_0091_BE9B_415E_B72E7CB93485",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.48,
           "yaw": -142.32,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 67,
              "width": 67,
              "url": "media/panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -7.22
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_F6945767_FFB1_7796_41E8_C34FF4311368, this.camera_219309E4_0191_9A89_4172_2286C2FFB386); this.mainPlayList.set('selectedIndex', 10)"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -142.32,
           "hfov": 7.48,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 134,
              "width": 134,
              "url": "media/panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -7.22
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_1F586A1C_0070_B9B9_4160_68394E4D0193",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 13.82,
           "yaw": -44.94,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 123,
              "width": 123,
              "url": "media/panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": 1.5
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80, this.camera_27156975_0191_9B8B_4150_2FD78BA97A3E); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -44.94,
           "hfov": 13.82,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 247,
              "width": 247,
              "url": "media/panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81_0_HS_2_0.png"
             }
            ]
           },
           "pitch": 1.5
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81.jpeg"
         }
        ]
       }
      }
     ],
     "partial": false,
     "hfovMax": 120,
     "vfov": 180
    },
    "yaw": -5.4,
    "distance": 1,
    "backwardYaw": -44.94
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80",
       "yaw": -169.4,
       "distance": 1,
       "backwardYaw": 108.09
      }
     ],
     "hfov": 360,
     "id": "panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB",
     "class": "Panorama",
     "pitch": 0,
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB_t.jpg",
     "label": "2.8",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_1F494D6E_0070_9B99_417B_B6DC0CE94A90",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 13.83,
           "yaw": -169.4,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 123,
              "width": 123,
              "url": "media/panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": 1.04
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80, this.camera_21527601_0191_898A_4171_CE87AD50D685); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -169.4,
           "hfov": 13.83,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 247,
              "width": 247,
              "url": "media/panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 1.04
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB.jpeg"
         }
        ]
       }
      }
     ],
     "partial": false,
     "hfovMax": 120,
     "vfov": 180
    },
    "yaw": 108.09,
    "distance": 1,
    "backwardYaw": -169.4
   }
  ],
  "hfov": 360,
  "id": "panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80_t.jpg",
  "label": "[Group 3]-IMG_1073_IMG_1169-87 images",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80_t.jpg",
    "overlays": [
     {
      "bleachingDistance": 0.4,
      "id": "overlay_12BA9D7B_0090_9A7E_4174_DBA5ADB71E8A",
      "class": "LensFlarePanoramaOverlay",
      "yaw": 70.22,
      "bleaching": 0.7,
      "pitch": 60.1
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_145BEBAE_00B1_BE99_4138_EC123556992C",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.4,
        "yaw": -5.4,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 67,
           "width": 67,
           "url": "media/panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -10.74
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81, this.camera_261E67A8_0191_969A_4184_B1E813C137AB); this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -5.4,
        "hfov": 7.4,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 134,
           "url": "media/panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -10.74
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_23A491DF_0071_8AB7_417C_74BF23E3C9C0",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.82,
        "yaw": 108.09,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 123,
           "width": 123,
           "url": "media/panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 1.96
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB, this.camera_260937CA_0191_969E_4176_DF813DE196D2); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 108.09,
        "hfov": 13.82,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 247,
           "width": 247,
           "url": "media/panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 1.96
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_21BAE9CF_0071_9A97_4177_254748B42A94",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.83,
        "yaw": 65.69,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 123,
           "width": 123,
           "url": "media/panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 1.04
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 65.69,
        "hfov": 13.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 247,
           "width": 247,
           "url": "media/panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 1.04
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "id": "panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "id": "panorama_F6BB5C69_FF91_999A_41E5_AB192B75893E",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_F6BB5C69_FF91_999A_41E5_AB192B75893E_t.jpg",
  "label": "2.1",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F6BB5C69_FF91_999A_41E5_AB192B75893E_t.jpg",
    "overlays": [
     {
      "bleachingDistance": 0.4,
      "id": "overlay_0DED98E3_0097_7A8E_4176_14A9B2499288",
      "class": "LensFlarePanoramaOverlay",
      "yaw": -87.05,
      "bleaching": 0.7,
      "pitch": 55.08
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_F6BB5C69_FF91_999A_41E5_AB192B75893E_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_F6BB5C69_FF91_999A_41E5_AB192B75893E.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "id": "panorama_F6BB5C69_FF91_999A_41E5_AB192B75893E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C",
 {
  "id": "panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20",
 {
  "id": "panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.02,
   "pitch": 2.51
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F6B45FEE_FF97_F699_41D8_DE7240342067",
 {
  "id": "panorama_F6B45FEE_FF97_F699_41D8_DE7240342067_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81",
 {
  "id": "panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "id": "panorama_F6911512_FFB0_8B8E_41DE_424B7139B512",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_F6911512_FFB0_8B8E_41DE_424B7139B512_t.jpg",
  "label": "2.6",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F6911512_FFB0_8B8E_41DE_424B7139B512_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_21C9F583_0190_8A8E_4176_DAB632404B80",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.75,
        "yaw": 3.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 123,
           "width": 123,
           "url": "media/panorama_F6911512_FFB0_8B8E_41DE_424B7139B512_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 6.11
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 3.92,
        "hfov": 13.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 247,
           "width": 247,
           "url": "media/panorama_F6911512_FFB0_8B8E_41DE_424B7139B512_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 6.11
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_F6911512_FFB0_8B8E_41DE_424B7139B512_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_F6911512_FFB0_8B8E_41DE_424B7139B512.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "id": "panorama_F6911512_FFB0_8B8E_41DE_424B7139B512_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3",
 {
  "id": "panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB",
 {
  "id": "panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F6945767_FFB1_7796_41E8_C34FF4311368",
 {
  "id": "panorama_F6945767_FFB1_7796_41E8_C34FF4311368_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5",
 {
  "id": "panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484",
 {
  "id": "panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD",
 {
  "id": "panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6",
 {
  "id": "panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2",
 {
  "id": "panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F699315A_FFB0_8BB9_41B9_F1706F088431",
 {
  "id": "panorama_F699315A_FFB0_8BB9_41B9_F1706F088431_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804",
 {
  "id": "panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3",
       "yaw": 154.19,
       "distance": 1,
       "backwardYaw": 163.64
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF",
          "yaw": -37.34,
          "distance": 1,
          "backwardYaw": 12.68
         }
        ],
        "hfov": 360,
        "id": "panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125",
        "class": "Panorama",
        "pitch": 0,
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125_t.jpg",
        "label": "10 (7)",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125_t.jpg",
          "overlays": [
           {
            "bleachingDistance": 0.4,
            "id": "overlay_0DEECDCD_0090_FA9B_4180_1C056F2FD45A",
            "class": "LensFlarePanoramaOverlay",
            "yaw": 96.85,
            "bleaching": 0.7,
            "pitch": 78.19
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_19F66A11_0097_F98A_4180_49705573B543",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 20.98,
              "yaw": -37.34,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 177,
                 "width": 193,
                 "url": "media/panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -14.4
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF, this.camera_263A27E6_0191_9696_4160_1E566F03CE2A); this.mainPlayList.set('selectedIndex', 19)"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -37.34,
              "hfov": 20.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 354,
                 "width": 387,
                 "url": "media/panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -14.4
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125.jpeg"
            }
           ]
          }
         }
        ],
        "partial": false,
        "hfovMax": 120,
        "vfov": 180
       },
       "yaw": 12.68,
       "distance": 1,
       "backwardYaw": -37.34
      }
     ],
     "hfov": 360,
     "id": "panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF",
     "class": "Panorama",
     "pitch": 0,
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF_t.jpg",
     "label": "10 (6)",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF_t.jpg",
       "overlays": [
        {
         "bleachingDistance": 0.4,
         "id": "overlay_0DFFD624_0090_898A_4171_E37D8DE63AB8",
         "class": "LensFlarePanoramaOverlay",
         "yaw": 133.02,
         "bleaching": 0.7,
         "pitch": 75.68
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_19482122_0090_8B8E_417A_C71588F712EF",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 27.66,
           "yaw": 154.19,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 179,
              "width": 200,
              "url": "media/panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": 0.58
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3, this.camera_219739EF_0191_9A96_4179_335BE25899F6); this.mainPlayList.set('selectedIndex', 18)"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 154.19,
           "hfov": 27.66,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 444,
              "width": 494,
              "url": "media/panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 0.58
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_19E16C33_0090_F98E_4164_966347431FC0",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 13.58,
           "yaw": -84.58,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 123,
              "width": 123,
              "url": "media/panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -10.95
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 16)"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -84.58,
           "hfov": 13.58,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 247,
              "width": 247,
              "url": "media/panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -10.95
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_20E72D31_0193_9B8B_415A_3FBCF084FD64",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 13.79,
           "yaw": 12.68,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 123,
              "width": 123,
              "url": "media/panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -4.03
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125, this.camera_218999FB_0191_9A7E_416E_23457AAF37E0); this.mainPlayList.set('selectedIndex', 20)"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 12.68,
           "hfov": 13.79,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 247,
              "width": 247,
              "url": "media/panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -4.03
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF.jpeg"
         }
        ]
       }
      }
     ],
     "partial": false,
     "hfovMax": 120,
     "vfov": 180
    },
    "yaw": 163.64,
    "distance": 1,
    "backwardYaw": 154.19
   }
  ],
  "hfov": 360,
  "id": "panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3_t.jpg",
  "label": "10 (5)",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3_t.jpg",
    "overlays": [
     {
      "bleachingDistance": 0.4,
      "id": "overlay_0DC6AAAC_0090_9E9A_4180_2CE8101B5710",
      "class": "LensFlarePanoramaOverlay",
      "yaw": 133.52,
      "bleaching": 0.7,
      "pitch": 78.44
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_18968FFB_0091_967F_4177_76B6C2E021E4",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 30.04,
        "yaw": 163.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 146,
           "width": 200,
           "url": "media/panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -23.39
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF, this.camera_2798F8C1_0191_9A8A_4181_56821AC1FD34); this.mainPlayList.set('selectedIndex', 19)"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 163.64,
        "hfov": 30.04,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 428,
           "width": 584,
           "url": "media/panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -23.39
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "id": "panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF",
 {
  "id": "panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125",
 {
  "id": "panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E",
 {
  "id": "panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A",
 {
  "id": "panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C",
 {
  "id": "panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D",
 {
  "id": "panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907",
 {
  "id": "panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "camera": "this.panorama_F6BB5C69_FF91_999A_41E5_AB192B75893E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6BB5C69_FF91_999A_41E5_AB192B75893E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "camera": "this.panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "camera": "this.panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "camera": "this.panorama_F6B45FEE_FF97_F699_41D8_DE7240342067_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6B45FEE_FF97_F699_41D8_DE7240342067",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "camera": "this.panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "camera": "this.panorama_F6911512_FFB0_8B8E_41DE_424B7139B512_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6911512_FFB0_8B8E_41DE_424B7139B512",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "camera": "this.panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "camera": "this.panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "camera": "this.panorama_F6945767_FFB1_7796_41E8_C34FF4311368_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6945767_FFB1_7796_41E8_C34FF4311368",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "camera": "this.panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "camera": "this.panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "camera": "this.panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "camera": "this.panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "camera": "this.panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "camera": "this.panorama_F699315A_FFB0_8BB9_41B9_F1706F088431_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F699315A_FFB0_8BB9_41B9_F1706F088431",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "camera": "this.panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "camera": "this.panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "camera": "this.panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "camera": "this.panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "camera": "this.panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "camera": "this.panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)"
   },
   {
    "camera": "this.panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)"
   },
   {
    "camera": "this.panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)"
   },
   {
    "camera": "this.panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist",
  "items": [
   {
    "camera": "this.panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F61AE2CC_FF91_8E9A_41EA_509A22AD4E81",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 0, 1)"
   },
   {
    "camera": "this.panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6A0FD42_FF90_FB8E_41D2_8B2BA5987B80",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 1, 2)"
   },
   {
    "camera": "this.panorama_F6BB5C69_FF91_999A_41E5_AB192B75893E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6BB5C69_FF91_999A_41E5_AB192B75893E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 2, 3)"
   },
   {
    "camera": "this.panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6A67528_FF91_8B9A_41E6_56F9684AF33C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 3, 4)"
   },
   {
    "camera": "this.panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6B6D3E9_FF90_8E9A_41D5_EB46B4F9AF20",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 4, 5)"
   },
   {
    "camera": "this.panorama_F6B45FEE_FF97_F699_41D8_DE7240342067_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6B45FEE_FF97_F699_41D8_DE7240342067",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 5, 6)"
   },
   {
    "camera": "this.panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6AFA338_FF91_8FFA_41EE_7F6244446D81",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 6, 7)"
   },
   {
    "camera": "this.panorama_F6911512_FFB0_8B8E_41DE_424B7139B512_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6911512_FFB0_8B8E_41DE_424B7139B512",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 7, 8)"
   },
   {
    "camera": "this.panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6919D2E_FFB3_9B99_41EA_5DAC73CDF1E3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 8, 9)"
   },
   {
    "camera": "this.panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69395B7_FFB7_8AF6_41D8_713585E897CB",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 9, 10)"
   },
   {
    "camera": "this.panorama_F6945767_FFB1_7796_41E8_C34FF4311368_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6945767_FFB1_7796_41E8_C34FF4311368",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 10, 11)"
   },
   {
    "camera": "this.panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6946933_FFB1_9B8F_41EE_51075DEF38B5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 11, 12)"
   },
   {
    "camera": "this.panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69552F8_FFB0_8E79_41D6_2045BD5B1484",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 12, 13)"
   },
   {
    "camera": "this.panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69733C0_FFB0_8E8A_41E3_1AA37195B0AD",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 13, 14)"
   },
   {
    "camera": "this.panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F698C0D0_FFB1_8A8A_41CF_36F13AF4F7A6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 14, 15)"
   },
   {
    "camera": "this.panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6988E74_FFB1_798A_41C5_EA5356DE41A2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 15, 16)"
   },
   {
    "camera": "this.panorama_F699315A_FFB0_8BB9_41B9_F1706F088431_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F699315A_FFB0_8BB9_41B9_F1706F088431",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 16, 17)"
   },
   {
    "camera": "this.panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69963FF_FFB3_8E76_41D2_E8736AB3F804",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 17, 18)"
   },
   {
    "camera": "this.panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69A761B_FFB0_89BE_41E6_9FA5D01ABEA3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 18, 19)"
   },
   {
    "camera": "this.panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69AFB65_FFB1_9F8B_41D7_C776D08FC6EF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 19, 20)"
   },
   {
    "camera": "this.panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69A81DA_FFB1_8AB9_41EF_267CE52AC125",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 20, 21)"
   },
   {
    "camera": "this.panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69BC2CB_FFB0_8E9E_41E2_46C1F007EE8E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 21, 22)"
   },
   {
    "camera": "this.panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69B829C_FFB7_8EBA_41D1_D03A6F92F98A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 22, 23)"
   },
   {
    "camera": "this.panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69C4FE8_FFB1_B69A_41ED_D42BAEB88B5C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 23, 24)"
   },
   {
    "camera": "this.panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69D689E_FFB0_FAB9_41EE_AFD3E345CA7D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 24, 25)"
   },
   {
    "camera": "this.panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F69ECF75_FFB0_978A_41E1_E12887DE8907",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist, 25, 0)"
   }
  ]
 },
 {
  "id": "camera_21527601_0191_898A_4171_CE87AD50D685",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -71.91,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2154160E_0191_8996_4171_1877AF7D2511",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.71,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2149A619_0191_89BA_416B_700DC5CF28BC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -37.56,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2143E625_0191_898A_4181_719A69E04211",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -121.66,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_21448631_0191_898A_416F_1E6327EAD8BA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 91.95,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_217EE63F_0191_89F6_4160_826491C53E3F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -101.12,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2177964B_0191_899E_4180_513D7B862B73",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 179.62,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_216ED657_0191_89B6_4164_7B9D1A3E16E7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -5.28,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_21679662_0191_898E_4179_C872DFEDB442",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -170.55,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_269CA66E_0191_8996_4167_28418E04425F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.81,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_268B0692_0191_9689_416B_A8581A4A9FF6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 31.65,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2681F6AF_0191_9697_4180_2D3BE843ECC8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 105.56,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_26BDC6CF_0191_9697_4116_141E81CA3050",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.49,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_26A986F0_0191_9689_4151_6393033F6078",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 153.96,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_26A5870B_0191_979E_415D_7ED3BB4D6CB8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -109.24,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_26D7672E_0191_9796_4181_77A8BEBABCA6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.93,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_26C0574C_0191_979A_4181_7938BDB9702A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 21.2,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_26F3C76D_0191_979A_416D_1FF4419650A6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.97,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_26ECF78D_0191_969A_4173_BADFCD4A44C5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -96.34,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_261E67A8_0191_969A_4184_B1E813C137AB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 135.06,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_260937CA_0191_969E_4176_DF813DE196D2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 10.6,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_263A27E6_0191_9696_4160_1E566F03CE2A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2635D806_0191_9989_4180_7B2D89383FA0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65.45,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2626C827_0191_9997_4181_6623732A3525",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 100.95,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_26519842_0191_9989_4160_19C272541682",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.16,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_26434865_0191_998B_413C_DF4595EBD9DE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 93.11,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_267C0884_0191_9A8A_4173_D5C48759B3EE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.54,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_266FF8A0_0191_9A8A_417C_57AA6026A5AC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.84,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2798F8C1_0191_9A8A_4181_56821AC1FD34",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -25.81,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_278BB8DC_0191_9ABB_4170_9E66C41A4DEA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.46,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2784D8FD_0191_9A7A_417F_6EBA5247D4A6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 100.03,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_27B7B919_0191_9BBA_4167_4DB92F8412A4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -169.17,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_27A1392E_0191_9B96_4173_14F442FD5BE0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.46,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_27D38939_0191_9BFA_4181_0E7EE71A0202",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.46,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_27CD4945_0191_9B8A_4177_FDFCF8729666",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 37.68,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_27FFB951_0191_9B8A_417F_C46CA71A3BB8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -97.98,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_27E9295D_0191_9BBA_4172_5B67E897AF24",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 66.7,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_271B9969_0191_9B9A_4182_B6B0D8B17997",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.86,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_27156975_0191_9B8B_4150_2FD78BA97A3E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 174.6,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_219309E4_0191_9A89_4172_2286C2FFB386",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -36.77,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_219739EF_0191_9A96_4179_335BE25899F6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.36,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_218999FB_0191_9A7E_416E_23457AAF37E0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 142.66,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_218D9A07_0191_9996_417A_7E7D5C48FA53",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 162.67,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_21863A13_0191_998E_4160_ECD4E6252239",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -133.9,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "borderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "left": 0,
  "transitionMode": "blending",
  "progressLeft": 0,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadow": true,
  "toolTipBorderRadius": 3,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipBorderSize": 1,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderSize": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "toolTipPaddingBottom": 4,
  "progressRight": 0,
  "playbackBarLeft": 0,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "shadow": false,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowColor": "#333333",
  "playbackBarHeight": 10,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "borderSize": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingTop": 4,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBarOpacity": 1,
  "progressBottom": 0,
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadowHorizontalLength": 0,
  "class": "ViewerArea",
  "width": "100%",
  "playbackBarBottom": 5,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressHeight": 10,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBorderRadius": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "paddingRight": 0,
  "playbackBarHeadShadowColor": "#000000",
  "top": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "paddingBottom": 0,
  "minWidth": 100,
  "minHeight": 50,
  "toolTipFontStyle": "normal",
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "height": "100%",
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBorderColor": "#000000",
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBorderRadius": 0,
  "toolTipFontSize": 12,
  "toolTipOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadHeight": 15,
  "paddingTop": 0
 },
 {
  "borderRadius": 0,
  "children": [
   "this.IconButton_0DB7C02F_0090_8996_415C_C595EA7F2724",
   "this.IconButton_0DB7E02F_0090_8996_416A_8FD9B26CA8E1",
   "this.IconButton_0DB7902F_0090_8996_40C1_604C62D17100",
   "this.IconButton_0DB7802F_0090_8996_4170_259D4A0FACD4",
   {
    "borderRadius": 0,
    "children": [
     "this.IconButton_0DB8502F_0090_8996_4165_205C49DCDBE8",
     "this.IconButton_0DB8402F_0090_8996_4180_9D68E7239C13",
     "this.IconButton_0DB8102F_0090_8996_4178_50CB47180A10"
    ],
    "verticalAlign": "middle",
    "paddingLeft": 0,
    "contentOpaque": false,
    "width": 40,
    "gap": 4,
    "overflow": "hidden",
    "horizontalAlign": "center",
    "class": "Container",
    "scrollBarMargin": 2,
    "height": "100%",
    "paddingBottom": 0,
    "shadow": false,
    "paddingRight": 0,
    "minWidth": 20,
    "minHeight": 20,
    "id": "Container_0DB7A02F_0090_8996_416C_AF9C4CDD7856",
    "scrollBarWidth": 10,
    "borderSize": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "layout": "vertical",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5
   },
   "this.IconButton_0DB8002F_0090_8996_417B_2178368E20B0",
   "this.IconButton_0DB8302F_0090_8996_4162_E919BCB697C3",
   {
    "borderRadius": 0,
    "paddingLeft": 0,
    "width": 40,
    "height": 40,
    "mode": "toggle",
    "horizontalAlign": "center",
    "pressedIconURL": "skin/IconButton_0DB8202F_0090_8996_4171_A741C2817CDB_pressed.png",
    "class": "IconButton",
    "cursor": "hand",
    "paddingBottom": 0,
    "shadow": false,
    "paddingRight": 0,
    "minWidth": 0,
    "minHeight": 0,
    "id": "IconButton_0DB8202F_0090_8996_4171_A741C2817CDB",
    "iconURL": "skin/IconButton_0DB8202F_0090_8996_4171_A741C2817CDB.png",
    "transparencyActive": false,
    "borderSize": 0,
    "paddingTop": 0,
    "verticalAlign": "middle",
    "backgroundOpacity": 0
   },
   "this.IconButton_0DB8C02F_0090_8996_4161_E9121B04633D"
  ],
  "verticalAlign": "middle",
  "right": "33.73%",
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "gap": 4,
  "overflow": "hidden",
  "horizontalAlign": "center",
  "width": "23.643%",
  "class": "Container",
  "scrollBarMargin": 2,
  "height": "16.087%",
  "paddingBottom": 0,
  "shadow": false,
  "paddingRight": 0,
  "minWidth": 392,
  "minHeight": 20,
  "id": "Container_0DB8F02F_0090_8996_4179_0A4491F4DB44",
  "scrollBarWidth": 10,
  "bottom": "1.85%",
  "borderSize": 0,
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "layout": "horizontal",
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundOpacity": 0,
  "borderRadius": 5,
  "itemBackgroundOpacity": 0,
  "itemBorderRadius": 0,
  "rollOverItemBackgroundOpacity": 0,
  "itemLabelFontWeight": "normal",
  "itemOpacity": 1,
  "itemLabelPosition": "bottom",
  "itemThumbnailOpacity": 1,
  "itemLabelFontSize": 14,
  "itemLabelGap": 9,
  "width": 118,
  "itemLabelFontStyle": "normal",
  "itemMode": "normal",
  "gap": 10,
  "class": "ThumbnailList",
  "itemThumbnailBorderRadius": 50,
  "itemThumbnailShadowOpacity": 0.54,
  "itemThumbnailShadow": true,
  "itemPaddingLeft": 3,
  "height": "94.457%",
  "horizontalAlign": "left",
  "playList": "this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist",
  "itemThumbnailShadowBlurRadius": 8,
  "itemPaddingRight": 3,
  "itemVerticalAlign": "middle",
  "itemPaddingTop": 3,
  "itemLabelFontFamily": "Arial",
  "itemLabelFontColor": "#FFFFFF",
  "scrollBarMargin": 2,
  "rollOverItemLabelFontWeight": "normal",
  "itemThumbnailShadowHorizontalLength": 3,
  "itemBackgroundColorRatios": [],
  "itemThumbnailShadowVerticalLength": 3,
  "shadow": false,
  "itemThumbnailScaleMode": "fit_outside",
  "paddingBottom": 10,
  "itemThumbnailWidth": 75,
  "paddingRight": 20,
  "minWidth": 20,
  "minHeight": 20,
  "bottom": "2.72%",
  "itemBackgroundColor": [],
  "id": "ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5",
  "itemThumbnailShadowColor": "#000000",
  "scrollBarWidth": 10,
  "borderSize": 0,
  "itemHorizontalAlign": "center",
  "selectedItemLabelFontColor": "#FFCC00",
  "itemThumbnailShadowSpread": 1,
  "itemPaddingBottom": 3,
  "itemLabelTextDecoration": "none",
  "itemLabelHorizontalAlign": "center",
  "paddingTop": 10,
  "selectedItemLabelFontWeight": "bold",
  "layout": "vertical",
  "verticalAlign": "top",
  "right": "0%",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "itemThumbnailHeight": 75,
  "paddingLeft": 20
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_0DE943D4_0091_8E89_4168_43A51841E4C5_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "contentOpaque": false,
 "scripts": {
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; }
 },
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_0DB8202F_0090_8996_4171_A741C2817CDB",
 "gap": 10,
 "overflow": "visible",
 "class": "Player",
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "vrPolyfillScale": 0.5,
 "layout": "absolute",
 "height": "100%",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "shadow": false,
 "paddingRight": 0,
 "minWidth": 20,
 "minHeight": 20,
 "id": "rootPlayer",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver"
})