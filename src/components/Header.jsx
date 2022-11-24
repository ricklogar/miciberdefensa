import React from 'react';
import '@styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav className='header-nav'>
        <svg
          className='header-nav__logo'
          version='1.0'
          xmlns='http://www.w3.org/2000/svg'
          width='402.000000pt'
          height='402.000000pt'
          viewBox='0 0 402.000000 402.000000'
          preserveAspectRatio='xMidYMid meet'>
          <g
            transform='translate(0.000000,402.000000) scale(0.100000,-0.100000)'
            fill='#2563EB'
            stroke='none'>
            <path
              d='M1850 3974 c-414 -46 -728 -167 -1034 -396 -103 -78 -294 -269 -375
-376 -270 -357 -401 -749 -401 -1200 0 -373 92 -700 285 -1018 237 -389 591
-680 1015 -832 366 -132 772 -151 1152 -56 574 144 1074 558 1311 1089 127
285 178 522 177 830 -1 969 -695 1779 -1660 1940 -90 15 -396 28 -470 19z
m455 -58 c552 -86 1055 -417 1345 -884 174 -281 290 -654 290 -931 l0 -71
-334 0 -333 0 -7 83 c-28 332 -168 608 -424 840 -253 228 -595 338 -952 307
-287 -25 -533 -138 -744 -340 -232 -222 -353 -465 -387 -777 l-12 -113 -334 0
-333 0 0 70 c0 152 55 417 125 600 173 453 547 856 980 1055 215 99 401 149
675 179 67 8 356 -4 445 -18z m-190 -696 c272 -24 496 -120 703 -302 215 -190
346 -422 393 -696 70 -412 -57 -802 -355 -1089 -227 -220 -474 -326 -794 -340
-343 -15 -631 89 -877 319 -212 198 -342 441 -380 713 -61 427 87 826 411
1107 198 171 421 266 673 287 53 5 98 9 101 9 3 1 59 -3 125 -8z m-1540 -1530
c5 -15 -6 -34 -39 -74 -25 -29 -46 -56 -46 -58 0 -3 29 -14 66 -24 63 -17 98
-46 77 -64 -4 -4 -59 -22 -122 -40 -93 -27 -115 -30 -122 -19 -15 23 -12 26
71 49 44 12 78 26 75 30 -2 4 -32 15 -65 24 -33 9 -60 19 -60 21 0 2 21 27 46
56 25 28 43 53 41 55 -2 2 -39 -7 -83 -20 -71 -21 -80 -22 -85 -7 -4 9 -4 19
0 23 7 8 199 66 223 67 9 1 20 -8 23 -19z m3118 -70 c-6 -23 -12 -24 -136 -41
l-89 -11 38 -39 c21 -22 42 -39 47 -39 4 0 13 14 18 30 7 19 18 30 30 30 22 0
22 1 8 -56 -10 -38 -9 -47 6 -64 12 -13 14 -24 8 -35 -8 -14 -26 -2 -111 71
-141 122 -139 135 28 156 162 22 159 22 153 -2z m-2989 -285 c4 -11 -25 -30
-110 -73 -104 -54 -116 -57 -124 -41 -9 15 4 25 93 73 107 58 131 65 141 41z
m2653 -11 c3 -9 -5 -27 -22 -44 -54 -56 -9 -93 50 -41 71 62 138 50 143 -27 3
-38 -1 -47 -32 -78 -34 -34 -56 -38 -56 -10 0 7 11 22 25 34 32 28 34 72 4 72
-11 0 -37 -13 -57 -29 -52 -42 -82 -47 -115 -21 -38 30 -37 78 4 125 34 39 47
43 56 19z m-2564 -168 c45 -19 77 -57 84 -100 5 -32 3 -36 -16 -36 -16 0 -23
8 -28 30 -13 66 -101 93 -148 45 -17 -16 -25 -35 -25 -58 0 -37 32 -87 56 -87
8 0 14 -10 14 -26 0 -22 -3 -24 -22 -19 -34 11 -76 54 -89 92 -20 61 13 132
75 159 40 17 59 17 99 0z m2471 -118 c44 -39 88 -78 96 -85 12 -11 12 -15 -2
-29 -15 -16 -23 -16 -109 0 -50 9 -93 15 -95 13 -2 -2 23 -28 57 -57 54 -47
59 -54 46 -68 -14 -13 -26 -5 -110 68 -84 73 -94 85 -84 101 14 23 5 22 100 4
43 -8 86 -15 94 -15 9 0 -11 25 -46 56 -49 45 -59 59 -50 70 6 8 14 14 16 14
3 0 42 -32 87 -72z m-2334 -207 c-46 -50 -87 -91 -91 -91 -3 0 -12 6 -18 14
-10 11 5 32 75 106 77 80 89 89 102 76 13 -13 5 -25 -68 -105z m2029 -1 c-78
-60 -73 -53 -51 -80 l20 -24 36 28 c30 22 40 25 51 16 21 -18 19 -22 -20 -49
-39 -26 -42 -36 -19 -62 16 -17 18 -16 62 16 50 39 55 41 71 21 9 -11 4 -19
-24 -40 -19 -14 -50 -38 -69 -52 l-34 -25 -77 101 c-43 57 -73 106 -69 110 5
5 36 29 69 54 55 41 61 44 73 28 11 -15 9 -20 -19 -42z m-1797 -21 c81 -53 99
-99 54 -144 -13 -13 -23 -35 -23 -51 0 -30 -42 -74 -70 -74 -23 0 -93 42 -93
56 0 19 26 24 47 9 21 -17 59 -19 68 -5 11 18 -4 45 -40 68 -19 12 -37 22 -40
22 -2 0 -17 -18 -31 -40 -29 -43 -31 -45 -53 -31 -12 8 -1 30 55 115 38 58 71
106 73 106 2 0 26 -14 53 -31z m1578 -93 c0 -2 3 -11 6 -19 4 -10 -11 -21 -50
-38 -59 -24 -65 -33 -42 -64 13 -19 15 -19 54 -1 22 10 45 15 51 12 22 -14 10
-35 -25 -46 -46 -15 -50 -29 -25 -79 21 -40 21 -40 1 -51 -22 -12 -21 -13 -88
133 l-41 87 67 35 c61 31 92 42 92 31z m-1272 -73 c51 -19 72 -33 72 -45 0
-27 -12 -28 -73 -3 l-58 24 -9 -25 c-14 -35 -15 -33 34 -54 36 -15 44 -22 39
-39 -6 -25 -1 -25 -57 -1 l-47 20 -9 -26 c-13 -34 -9 -39 50 -60 32 -12 50
-24 50 -34 0 -28 -10 -29 -73 -3 -106 43 -101 28 -49 158 25 63 48 115 51 115
3 0 39 -12 79 -27z m1006 -49 c9 -24 2 -30 -59 -43 -55 -12 -60 -18 -49 -57 5
-21 8 -21 52 -8 36 11 47 12 54 2 13 -22 3 -33 -40 -42 -37 -8 -42 -12 -42
-37 0 -38 10 -41 66 -24 64 19 74 19 74 -5 0 -14 -11 -22 -42 -30 -24 -6 -58
-16 -75 -21 -18 -6 -37 -8 -42 -5 -6 4 -54 174 -65 233 -1 6 128 50 155 52 4
1 10 -6 13 -15z m-704 -43 c66 -30 77 -111 20 -152 -27 -21 -27 -21 -12 -60 8
-22 13 -42 9 -45 -12 -12 -46 18 -58 51 -7 19 -19 35 -26 35 -15 0 -15 2 -7
24 3 9 16 16 28 16 36 0 58 22 54 55 -2 25 -10 32 -42 43 -21 7 -40 11 -42 9
-2 -1 -11 -49 -20 -105 -14 -82 -20 -102 -34 -102 -9 0 -19 2 -22 5 -3 3 3 52
13 108 29 158 23 147 67 140 20 -3 53 -13 72 -22z m365 -31 c73 -45 82 -137
20 -196 -30 -28 -108 -54 -122 -40 -12 12 20 46 43 46 37 0 74 42 74 85 0 57
-48 91 -116 83 l-29 -3 4 -107 c3 -102 2 -108 -17 -108 -24 0 -32 38 -32 168
l0 92 71 0 c54 0 80 -5 104 -20z'
            />
            <path
              d='M1966 3708 c-3 -13 -6 -71 -6 -130 0 -99 2 -108 19 -108 17 0 19 11
26 105 l7 105 34 0 c41 0 89 -22 98 -45 22 -57 -9 -110 -71 -121 -35 -6 -52
-18 -53 -36 0 -5 19 -8 43 -8 121 0 178 134 92 216 -34 31 -74 44 -146 44 -30
0 -38 -4 -43 -22z'
            />
            <path
              d='M1645 3691 c-18 -4 -29 -12 -28 -21 7 -51 35 -208 39 -222 6 -19 29
-24 39 -8 3 5 -1 46 -10 91 -21 112 -20 116 16 124 64 14 97 -75 34 -91 -18
-4 -25 -13 -25 -30 0 -13 6 -24 13 -24 7 0 26 -13 41 -29 19 -20 34 -27 51
-23 32 6 31 12 -5 47 -28 27 -29 30 -14 46 9 10 17 37 18 60 2 74 -61 104
-169 80z'
            />
            <path
              d='M2336 3588 c-14 -57 -28 -113 -32 -124 -5 -19 2 -23 77 -44 67 -18
83 -19 90 -8 15 23 10 28 -51 45 -61 16 -71 30 -51 62 8 12 16 13 50 2 45 -13
64 -8 59 17 -2 10 -21 20 -48 27 -36 9 -44 15 -42 31 7 42 8 43 64 28 70 -18
78 -18 78 6 0 14 -11 22 -42 30 -24 6 -56 15 -72 20 -16 6 -35 10 -41 10 -7 0
-23 -42 -39 -102z'
            />
            <path
              d='M1373 3608 c-40 -17 -73 -35 -73 -42 0 -26 84 -226 95 -226 7 0 29 7
49 15 20 8 52 22 72 30 30 12 34 17 25 34 -11 19 -12 19 -70 -4 l-60 -23 -10
29 c-11 32 -16 27 66 59 25 10 25 12 10 28 -16 15 -20 15 -61 0 l-45 -17 -10
30 c-9 26 -8 31 12 38 92 35 98 40 87 61 -6 11 -12 20 -13 19 -1 0 -35 -14
-74 -31z'
            />
            <path
              d='M2632 3474 c-48 -97 -55 -116 -42 -124 23 -15 24 -13 48 36 24 49 31
50 95 17 15 -7 27 -9 27 -4 0 5 2 16 5 23 4 10 -8 21 -35 33 -43 19 -46 25
-30 55 10 19 12 19 67 -5 36 -16 60 -22 66 -16 18 18 -1 37 -72 69 l-72 31
-57 -115z'
            />
            <path
              d='M1080 3453 c-11 -5 -86 -52 -108 -69 -6 -4 138 -214 146 -214 5 0 13
5 19 11 9 9 5 21 -14 50 -30 46 -27 58 20 83 61 33 94 -7 41 -49 -17 -14 -25
-28 -22 -44 l3 -23 42 31 c24 17 45 42 49 57 9 36 -11 73 -46 86 -19 6 -30 17
-30 28 0 22 -45 60 -69 59 -9 0 -23 -3 -31 -6z m44 -49 c26 -10 19 -31 -20
-61 -35 -26 -37 -26 -50 -8 -20 26 -18 40 9 58 24 18 38 20 61 11z'
            />
            <path
              d='M2906 3339 c-37 -50 -70 -98 -72 -107 -5 -24 119 -115 135 -99 19 19
12 31 -34 66 -25 18 -45 37 -45 41 0 4 8 14 18 23 17 16 21 15 59 -13 41 -30
42 -30 48 -9 6 17 0 29 -29 53 -35 31 -35 31 -17 53 l19 22 46 -35 c45 -35 76
-39 76 -11 0 11 -119 108 -131 107 -2 0 -35 -41 -73 -91z'
            />
            <path
              d='M824 3255 c-4 -10 20 -44 65 -94 96 -106 98 -108 118 -88 15 15 9 23
-72 107 -49 49 -92 90 -97 90 -5 0 -11 -7 -14 -15z'
            />
            <path
              d='M3140 3129 c-50 -44 -90 -84 -90 -88 0 -4 5 -12 12 -19 8 -8 27 3 75
45 34 30 63 54 63 52 0 -2 -13 -45 -29 -96 -27 -87 -28 -93 -11 -108 16 -14
24 -9 108 66 51 44 92 87 92 94 0 32 -25 23 -87 -32 -37 -32 -64 -51 -61 -43
44 120 59 182 48 195 -7 8 -16 15 -21 15 -5 0 -50 -36 -99 -81z'
            />
            <path
              d='M694 3100 c-11 -4 -33 -22 -47 -40 -34 -40 -37 -107 -7 -154 66 -107
240 -60 240 65 0 24 -3 30 -16 25 -9 -3 -18 -6 -20 -6 -2 0 -4 -9 -4 -21 0
-32 -53 -79 -90 -79 -38 0 -90 47 -90 82 0 30 36 88 54 88 19 0 28 14 20 34
-7 18 -10 18 -40 6z'
            />
            <path
              d='M3390 2885 c-21 -22 -22 -31 -17 -90 5 -55 4 -67 -10 -72 -25 -10
-48 11 -53 48 -3 23 -11 35 -24 37 -17 4 -18 -1 -13 -44 8 -77 70 -117 124
-79 25 18 33 52 23 107 -9 50 -4 68 20 68 22 0 38 -19 43 -49 3 -21 22 -40 40
-41 13 0 7 50 -10 83 -32 62 -82 75 -123 32z'
            />
            <path
              d='M475 2790 c-4 -12 -5 -23 -3 -25 1 -1 50 -26 107 -54 99 -50 131 -57
131 -29 0 10 -143 91 -221 126 -4 2 -10 -6 -14 -18z'
            />
            <path
              d='M396 2612 c-15 -15 -2 -50 35 -94 23 -27 38 -52 34 -56 -3 -4 -34
-16 -68 -27 -54 -17 -62 -23 -62 -44 0 -23 9 -27 110 -58 113 -34 135 -35 135
-8 0 10 -24 22 -75 37 -41 12 -75 25 -75 28 0 4 27 15 60 25 33 10 60 23 60
28 0 5 -18 30 -41 54 -22 25 -39 46 -37 49 2 2 39 -7 81 -20 42 -13 79 -21 82
-18 8 8 6 42 -2 42 -5 0 -58 15 -120 34 -62 19 -114 31 -117 28z'
            />
            <path
              d='M3370 2547 c0 -11 11 -22 30 -29 25 -8 33 -19 42 -54 9 -31 17 -44
28 -41 11 2 15 14 13 43 l-1 41 50 -8 c28 -5 53 -10 55 -13 5 -4 -21 -29 -109
-106 -25 -21 -38 -41 -38 -57 0 -14 4 -23 9 -21 21 7 211 180 211 191 -1 30
-23 38 -153 55 -133 17 -137 17 -137 -1z'
            />
            <path
              d='M1875 3159 c-250 -28 -499 -149 -681 -333 -200 -202 -309 -431 -336
-708 -55 -547 297 -1069 824 -1222 131 -38 235 -50 382 -43 220 10 403 70 589
194 365 243 562 668 507 1099 -71 568 -528 989 -1105 1017 -55 3 -136 1 -180
-4z m410 -84 c324 -84 606 -325 737 -627 61 -142 79 -224 85 -391 6 -170 -5
-257 -48 -391 -182 -556 -765 -873 -1336 -725 -87 22 -256 100 -329 150 -237
163 -408 417 -465 694 -24 114 -25 310 -3 425 31 168 106 335 209 470 56 73
186 196 258 243 127 85 303 153 453 177 109 17 327 5 439 -25z'
            />
            <path
              d='M1885 3028 c-212 -24 -431 -129 -587 -281 -424 -412 -421 -1075 5
-1484 187 -179 406 -271 672 -280 107 -4 149 -1 235 17 400 82 710 382 805
780 25 106 30 280 11 389 -60 340 -258 609 -561 756 -128 63 -223 91 -355 105
-107 11 -114 11 -225 -2z m535 -409 l390 -112 0 -109 c0 -613 -290 -1136 -695
-1253 -168 -49 -359 24 -536 206 -236 242 -369 620 -369 1045 l0 111 108 32
c437 127 661 190 685 190 15 1 203 -49 417 -110z'
            />
            <path
              d='M1700 2440 l-275 -77 -3 -36 c-2 -20 4 -90 12 -155 44 -334 158 -580
341 -731 55 -46 152 -97 203 -107 l32 -6 0 596 c0 561 -1 596 -17 595 -10 0
-142 -36 -293 -79z'
            />
            <path
              d='M1104 755 c-16 -24 -16 -27 2 -40 29 -22 63 -29 79 -15 19 16 6 39
-34 63 -30 18 -30 17 -47 -8z'
            />
          </g>
        </svg>

        <p className='header-nav__text'>MiCiberDefensa</p>
      </nav>
    </header>
  );
};

export default Header;
