// Огтвелов бинарный поиски олгаритмов гтнел мышкаи x координати аржекин аметамот аржекы,
// воры гтнвум е array зангвацум (+ ID)

document.write(	"<div  style='width:1000px; height:700px; border:1px solid;' onclick='showCoords(event)'></div>")

var array=[4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60, 62, 63, 64, 65, 66, 68, 69, 70, 72, 74, 75, 76, 77, 78, 80, 81, 82, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100, 102, 104, 105, 106, 108, 110, 111, 112, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 128, 129, 130, 132, 133, 134, 135, 136, 138, 140, 141, 142, 143, 144, 145, 146, 147, 148, 150, 152, 153, 154, 155, 156, 158, 159, 160, 161, 162, 164, 165, 166, 168, 169, 170, 171, 172, 174, 175, 176, 177, 178, 180, 182, 183, 184, 185, 186, 187, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 224, 225, 226, 228, 230, 231, 232, 234, 235, 236, 237, 238, 240, 242, 243, 244, 245, 246, 247, 248, 249, 250, 252, 253, 254, 255, 256, 258, 259, 260, 261, 262, 264, 265, 266, 267, 268, 270, 272, 273, 274, 275, 276, 278, 279, 280, 282, 284, 285, 286, 287, 288, 289, 290, 291, 292, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 308, 309, 310, 312, 314, 315, 316, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 332, 333, 334, 335, 336, 338, 339, 340, 341, 342, 343, 344, 345, 346, 348, 350, 351, 352, 354, 355, 356, 357, 358, 360, 361, 362, 363, 364, 365, 366, 368, 369, 370, 371, 372, 374, 375, 376, 377, 378, 380, 381, 382, 384, 385, 386, 387, 388, 390, 391, 392, 393, 394, 395, 396, 398, 399, 400, 402, 403, 404, 405, 406, 407, 408, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 422, 423, 424, 425, 426, 427, 428, 429, 430, 432, 434, 435, 436, 437, 438, 440, 441, 442, 444, 445, 446, 447, 448, 450, 451, 452, 453, 454, 455, 456, 458, 459, 460, 462, 464, 465, 466, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 480, 481, 482, 483, 484, 485, 486, 488, 489, 490, 492, 493, 494, 495, 496, 497, 498, 500, 501, 502, 504, 505, 506, 507, 508, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 522, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 542, 543, 544, 545, 546, 548, 549, 550, 551, 552, 553, 554, 555, 556, 558, 559, 560, 561, 562, 564, 565, 566, 567, 568, 570, 572, 573, 574, 575, 576, 578, 579, 580, 581, 582, 583, 584, 585, 586, 588, 589, 590, 591, 592, 594, 595, 596, 597, 598, 600, 602, 603, 604, 605, 606, 608, 609, 610, 611, 612, 614, 615, 616, 618, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 632, 633, 634, 635, 636, 637, 638, 639, 640, 642, 644, 645, 646, 648, 649, 650, 651, 652, 654, 655, 656, 657, 658, 660, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 674, 675, 676, 678, 679, 680, 681, 682, 684, 685, 686, 687, 688, 689, 690, 692, 693, 694, 695, 696, 697, 698, 699, 700, 702, 703, 704, 705, 706, 707, 708, 710, 711, 712, 713, 714, 715, 716, 717, 718, 720, 721, 722, 723, 724, 725, 726, 728, 729, 730, 731, 732, 734, 735, 736, 737, 738, 740, 741, 742, 744, 745, 746, 747, 748, 749, 750, 752, 753, 754, 755, 756, 758, 759, 760, 762, 763, 764, 765, 766, 767, 768, 770, 771, 772, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 788, 789, 790, 791, 792, 793, 794, 795, 796, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 810, 812, 813, 814, 815, 816, 817, 818, 819, 820, 822, 824, 825, 826, 828, 830, 831, 832, 833, 834, 835, 836, 837, 838, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 854, 855, 856, 858, 860, 861, 862, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 878, 879, 880, 882, 884, 885, 886, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 908, 909, 910, 912, 913, 914, 915, 916, 917, 918, 920, 921, 922, 923, 924, 925, 926, 927, 928, 930, 931, 932, 933, 934, 935, 936, 938, 939, 940, 942, 943, 944, 945, 946, 948, 949, 950, 951, 952, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 968, 969, 970, 972, 973, 974, 975, 976, 978, 979, 980, 981, 982, 984, 985, 986, 987, 988, 989, 990, 992, 993, 994, 995, 996, 998, 999];
console.log(array);


function showCoords(event) {
    var x = event.clientX;
    console.log("x=" + x);
    var search=  binarySearch(x, array);
    alert(search);
  }

function binarySearch(value, list) {

    let first    = 0;                // начальный индекс в массиве
    let last     = list.length - 1;  // конечный индекс
    let position = -1;
    let found    = false;
    let middle;

    while (found === false && first <= last) {

        middle = Math.floor((first + last) / 2);
    
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value){ // значение в нижней части списка
            last = middle - 1;
        } else {  // значение в верхней части списка
            first = middle + 1;
        }
    }
    
     if(position==-1) return "Element not found";
     return position;
}

//dog
//cd6357efdd966de8c0cb2f876cc89ec74ce35f0968e11743987084bd42fb8944 
//

