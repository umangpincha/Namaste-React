import React from "react";
import ReactDOM from "react-dom/client";


const MyData = {
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
            "collectionId": "83634",
            "title": "South Indian",
            "description": "Explore hot & spicy dishes that are a specialty of South India.",
            "imageId": "COLLECTIONS/IMAGES/MERCH/2024/8/20/a2d9550b-f4cf-4dbc-87ec-42c82405964a_South Indian (2).png",
            "aspectRatio": "3.44",
            "cta": {
              "link": "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian,south%20indian,layout_SouthIndian,ads_pc_south_indian",
              "type": "collectionv2"
            },
            "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
            "count": "276 restaurants",
            "navBarConfig": {}
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            "sortConfigs": [
              {
                "key": "relevance",
                "title": "Relevance (Default)",
                "selected": true,
                "defaultSelection": true
              },
              {
                "key": "deliveryTimeAsc",
                "title": "Delivery Time"
              },
              {
                "key": "modelBasedRatingDesc",
                "title": "Rating"
              },
              {
                "key": "costForTwoAsc",
                "title": "Cost: Low to High"
              },
              {
                "key": "costForTwoDesc",
                "title": "Cost: High to Low"
              }
            ],
            "restaurantCount": 276,
            "facetList": [
              {
                "label": "10 Mins Delivery",
                "id": "isRestaurantBolt",
                "selection": "SELECT_TYPE_SINGLESELECT",
                "facetInfo": [
                  {
                    "label": "10 Mins Delivery",
                    "id": "isRestaurantBoltfacetquery0",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_FLATTENED",
                "subLabel": "Filter by",
                "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
                "selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
              },
              {
                "label": "Veg/Non-Veg",
                "id": "isVeg",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Non Veg",
                    "id": "isVegfacetquery0",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Pure Veg",
                    "id": "isVegfacetquery1",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by",
                "openFilter": true
              },
              {
                "label": "Ratings",
                "id": "rating",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Ratings",
                    "id": "ratingfacetquery0",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.0+",
                    "id": "ratingfacetquery1",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.5+",
                    "id": "ratingfacetquery2",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by",
                "openFilter": true
              },
              {
                "label": "Delivery Time",
                "id": "deliveryTime",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than 30 mins",
                    "id": "deliveryTimefacetquery0",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Less than 45 mins",
                    "id": "deliveryTimefacetquery1",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by",
                "openFilter": true
              },
              {
                "label": "Cost For Two",
                "id": "costForTwo",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than Rs. 300",
                    "id": "costForTwofacetquery0",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Rs.300 - Rs.600",
                    "id": "costForTwofacetquery1",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Greater than Rs. 600",
                    "id": "costForTwofacetquery2",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by",
                "openFilter": true
              }
            ],
            "widgetId": "inlineFacetFilter"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "widgetPadding": {
                "left": 16,
                "top": 4,
                "right": 16,
                "bottom": 4
              },
              "widgetTheme": {
                "defaultMode": {
                  "backgroundColour": "#FFFFFF",
                  "theme": "THEME_TYPE_LIGHT",
                  "themeVariant": "THEME_VARIANT_DEFAULT"
                },
                "darkMode": {
                  "backgroundColour": "#1B3028",
                  "theme": "THEME_TYPE_DARK",
                  "themeVariant": "THEME_VARIANT_DEFAULT"
                }
              }
            },
            "id": "restaurantCountWidget",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                "text": "276 Restaurants to explore",
                "headerStyling": {
                  "textSize": 15,
                  "textColor": "text_color_highest_emphasis",
                  "textFontName": "FONT_NAME_BODY_B1_BOLD",
                  "maxLines": 1
                }
              }
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "577797",
              "name": "ITC Aashirvaad Soul Creations",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/10/5c9ed610-76d3-4e29-96d3-941937bc3bff_577797.JPG",
              "locality": "Jeevanahalli Main Rd",
              "areaName": "Kamanahalli",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Indian",
                "pure veg",
                "Healthy Food",
                "Home Food",
                "South Indian",
                "North Indian",
                "Sweets"
              ],
              "avgRating": 4.6,
              "veg": true,
              "parentId": "346141",
              "avgRatingString": "4.6",
              "totalRatingsString": "3.0K+",
              "promoted": true,
              "adTrackingId": "cid=63eebf15-f6fd-4909-9c96-4ea77861f1c9~p=2~adgrpid=63eebf15-f6fd-4909-9c96-4ea77861f1c9#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=577797~plpr=COLLECTION~eid=a4994cb8-35b9-4bd3-9a9d-07b0f230ea23~srvts=1789108825123~collid=83634",
              "sla": {
                "deliveryTime": 51,
                "lastMileTravel": 6.5,
                "serviceability": "SERVICEABLE",
                "slaString": "45-55 mins",
                "lastMileTravelString": "6.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-09-12 02:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "Serves only 100% vegetarian food, with no non-veg items."
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Serves only 100% vegetarian food, with no non-veg items.",
                          "theme": "",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
                },
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "63eebf15-f6fd-4909-9c96-4ea77861f1c9",
              "priceComparisonComms": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=577797&source=collection&query=South%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "502957",
              "name": "Andhra Gunpowder",
              "cloudinaryImageId": "bs9qgsy25pn07pzn6xx1",
              "locality": "Shivananda Circle",
              "areaName": "Malleshwaram",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Andhra",
                "Biryani",
                "South Indian"
              ],
              "avgRating": 4.5,
              "parentId": "10496",
              "avgRatingString": "4.5",
              "totalRatingsString": "4.0K+",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-09-12 01:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                    "description": "Top-rated for Andhra Food, based on user votes."
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Top-rated for Andhra Food, based on user votes.",
                          "theme": "",
                          "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
                },
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "priceComparisonComms": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=502957&source=collection&query=South%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1331741",
              "name": "The Filter Coffee",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/22/57f33572-1ef9-4673-ad51-6d9b974d75b1_607353.jpg",
              "locality": "Central Bangalore",
              "areaName": "Central Bangalore",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "South Indian",
                "Biryani",
                "Indian"
              ],
              "avgRating": 4.6,
              "veg": true,
              "parentId": "21001",
              "avgRatingString": "4.6",
              "totalRatingsString": "391",
              "promoted": true,
              "adTrackingId": "cid=0fd90ab2-ba28-4041-a749-a50ac9f74c7d~p=3~adgrpid=0fd90ab2-ba28-4041-a749-a50ac9f74c7d#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1331741~plpr=COLLECTION~eid=161f32a9-9f04-4d44-9f30-ceb949d3e63d~srvts=1789108825123~collid=83634",
              "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-09-11 22:30:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {},
                  "textBased": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹89",
                "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
                },
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "0fd90ab2-ba28-4041-a749-a50ac9f74c7d",
              "priceComparisonComms": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=1331741&source=collection&query=South%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "518369",
              "name": "Madras Meal Company",
              "cloudinaryImageId": "bqy6rjw55ctn04drgtt2",
              "locality": "Majestic",
              "areaName": "Malleshwaram",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "South Indian"
              ],
              "avgRating": 4.5,
              "parentId": "128893",
              "avgRatingString": "4.5",
              "totalRatingsString": "373",
              "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-40 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-09-12 01:00:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {},
                  "textBased": {},
                  "imageBased": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
                },
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "priceComparisonComms": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=518369&source=collection&query=South%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1100670",
              "name": "Nandi Upachar",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/b0104cd0-f377-49b2-b71b-26236ebf32b4_1100670.jpg",
              "locality": "MG Road",
              "areaName": "Central Bangalore",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Chinese",
                "South Indian",
                "North Indian",
                "Juices"
              ],
              "avgRating": 4.7,
              "veg": true,
              "parentId": "143950",
              "avgRatingString": "4.7",
              "totalRatingsString": "30",
              "promoted": true,
              "adTrackingId": "cid=2b5186bf-ea01-4a69-b86b-db83bef9bd43~p=4~adgrpid=2b5186bf-ea01-4a69-b86b-db83bef9bd43#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1100670~plpr=COLLECTION~eid=075ab4aa-69ca-4c80-beaf-0fcca5436133~srvts=1789108825124~collid=83634",
              "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-09-11 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "bolt!",
                          "imageId": "android/static-assets/icons/big_rx.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
                },
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "2b5186bf-ea01-4a69-b86b-db83bef9bd43",
              "priceComparisonComms": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=1100670&source=collection&query=South%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "205813",
              "name": "Paakashala",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/14/aa4eec0e-abcf-4346-bb30-749dd0103e6a_205813.JPG",
              "locality": "MG Road",
              "areaName": "MG Road",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Indian",
                "South Indian",
                "North Indian",
                "Chinese",
                "Chaat",
                "Juices",
                "Desserts",
                "Tea"
              ],
              "avgRating": 4.3,
              "veg": true,
              "parentId": "6959",
              "avgRatingString": "4.3",
              "totalRatingsString": "7.5K+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-09-11 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "Serves only 100% vegetarian food, with no non-veg items."
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "Serves only 100% vegetarian food, with no non-veg items.",
                          "theme": ""
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
                },
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "4.4K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "priceComparisonComms": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=205813&source=collection&query=South%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "645252",
              "name": "Shero Home Food - Chettinad",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/7/71dcd18f-93fc-45e1-88c0-9ca8200dab36_645252.JPG",
              "locality": "12th A Main Road",
              "areaName": "Rajajinagar",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Home Food",
                "Chettinad",
                "South Indian",
                "healthy",
                "dessert",
                "Snacks",
                "North Indian"
              ],
              "avgRating": 4.5,
              "veg": true,
              "parentId": "298931",
              "avgRatingString": "4.5",
              "totalRatingsString": "225",
              "promoted": true,
              "adTrackingId": "cid=2bd9aa6f-852b-4771-abc7-68885d69766f~p=7~adgrpid=2bd9aa6f-852b-4771-abc7-68885d69766f#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=645252~plpr=COLLECTION~eid=8e81c516-6b81-488f-af53-9e26147212f5~srvts=1789108825124~collid=83634",
              "sla": {
                "deliveryTime": 52,
                "lastMileTravel": 4.8,
                "serviceability": "SERVICEABLE",
                "slaString": "45-55 mins",
                "lastMileTravelString": "4.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-09-11 15:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "Serves only 100% vegetarian food, with no non-veg items."
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {},
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "theme": "",
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "Serves only 100% vegetarian food, with no non-veg items."
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹75 OFF",
                "subHeader": "ABOVE ₹599",
                "discountTag": "FLAT DEAL",
                "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
                },
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "2bd9aa6f-852b-4771-abc7-68885d69766f",
              "priceComparisonComms": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=645252&source=collection&query=South%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
    ]
}
       


// NavBar
const NavBar = () => {
    return (
        <div className="app">
            <nav className="navbar">

                <div className="logo">
                    Bite<span>kart</span>
                </div>

                <div className="nav-links">
                    <a href="#">Search</a>
                    <a href="#">Offers</a>
                    <a href="#">Help</a>
                    <a href="#">Sign In</a>
                    <a href="#">🛒 Cart</a>
                </div>

                <button className="menu-btn">
                    ☰
                </button>

            </nav>
        </div>
    );
};

// RestaurantCard
const RestaurantCard = (props)=>{
    const {resName} = props;
    const info = resName?.card?.card?.info;
    const imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/" 
    + info.cloudinaryImageId
            return(
            <div className="restaurant-card">
                <div className="image-container">
                    <img src={imageUrl} alt="Dum Safar Biryani"/>

                    <div className="offer">
                        {info.aggregatedDiscountInfoV3.header}
                        <br></br>
                        {info.aggregatedDiscountInfoV3.subHeader}
                    </div>
                </div>

                <div className="restaurant-info">

                    <div className="restaurant-title">
                        <span className="ad">Ad</span>
                        <h2>{info.name}</h2>
                    </div>

                    <div className="rating-row">
                        <span className="rating">★</span>
                        <span>{info.avgRatingString}</span>
                        <span>•</span>
                        <span>{info.sla.slaString}</span>
                    </div>

                    <p className="cuisines">
                    {info.cuisines.join(",")}
                    </p>

                    <p className="location">
                    {info.areaName}
                    </p>

                </div>

            </div>
    )
}





//Body
const Body=()=>{
    return(
    <div className="body">
        <div className="search-container">

        <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants and food"
        />

        <button className="search-button">
            🔍
        </button>

        </div>
        <div className="restaurant-container">
            {
                MyData.cards.map((restaurant,index)=>{
                    if(index>=3){
                        return(
                            <RestaurantCard resName={MyData.cards[index]} key={restaurant.card.card.info.id}/>
                        )
                    }
                })
            }
            
        </div>
    </div>)
}


// App Layout
const AppLayout = () => {
    return (
        <div className="app">
            <NavBar />
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(
    document.querySelector("#root")
);

root.render(<AppLayout />);