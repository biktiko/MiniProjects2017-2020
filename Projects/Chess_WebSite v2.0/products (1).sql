-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 26, 2018 at 05:44 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Tigrans_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Description` text NOT NULL,
  `src` text NOT NULL,
  `Price` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ID`, `Name`, `Description`, `src`, `Price`) VALUES
(1, 'Mini ChessHouse', 'This chess set package includes our Fierce Knight Staunton Chess Set in acacia wood and boxwood matched with our Standard Walnut and Maple Chess Board. The colors of acacia and boxwood chess pieces go perfect with the walnut and maple chess board. Our Fierce Knight is a blend of contemporary and traditional Staunton design featuring knights that are carved with realistic features. The perked ears, eyes, mouth, and mane create a fierce looking countenance that gives this set its name. The pieces have an elegant profile that is carefully turned to perfection on every piece and the golden rosewood and boxwood are hand polished to a rich sheen. The pieces are triple weighted for exceptional stability on the chess board. The bottom of the pieces are padded with the traditional thick green baize for easily sliding from square to square and a soft feel when placing. The chess board has 2.25\" squares, the perfect size for this chess set. Together, an unbeatable value for a large tournament size, high quality Staunton chess set and practical wood chess board.', 'forth.png', '$6.6'),
(2, 'Large chess', 'Chess is played on a square board of eight rows (called ranks and denoted with numbers 1 to 8) and eight columns (called files and denoted with letters a to h). The colors of the 64 squares alternate and are referred to as light and dark squares. The chessboard is placed with a light square at the right-hand end of the rank nearest to each player.purchased the domain name and assembled a team of software developers to redevelop the site as a chess portal. The site was relaunched in 2007 The site was heavily promoted via social media and grew quickly, attracting mainly casual players.', 'second.png', '$36.95'),
(3, 'Basic starter chess', 'The walnut and maple chess board is made with the finest veneers and sealed in semi-gloss polyurethane protective finish. The squares are 1.5\" and the overall size of the board is 14\" and .5\" thick. A wide black inlay border accentuates the playing area and the bottom of the board has pads to protect whatever surface it sets on. The chess box is wonderfully constructed and reminiscent of the old heirloom quality chess boxes from many years ago. The box is covered in high quality walnut veneer and the interior is lined with a thick green baize just like we use for the pads on our chess pieces. The box has a divider in the center for storing the black and white pieces separately. We used high quality recessed hinges and a brass plated lock for securing the lid. We include 2 keys in case one ever gets lost. square that the king has just crossed. Castling is permissible under the following conditions:', 'third.png', '$16.50'),
(4, 'Basic Club', 'The player with the white pieces always moves first. After the first move, players alternately move one piece per turn (except for castling, when two pieces are moved). Pieces are moved to either an unoccupied square or one occupied by an opponent\'s piece, which is captured and removed from play. With the sole exception of en passant, all pieces capture by moving to the square that the opponent\'s piece occupies. A player may not make any move that would put or leave the player\'s own king under attack. A player cannot \"pass\"; at each turn one must make a legal move (this is the basis for the finesse called zugzwang).', 'first.png\r\n', '$12'),
(5, 'Chess clock DGT ', 'The DGT North American clock uses 10 built-in algorithms to give a complete range of timing choices, plus elegant design to satisfy the most demanding chess player. Even multi-period delay settings are easy! Quick-set options permit instant set-up. Manual programming options are fast and intuitive and are automatically stored in memory. Of course our new digital timer is a superb chess clock, but it also times any two-person board gamelike Go, Shogi, Checkers, and Scrabble. All the bells and whistles, together with DGTs reputation for quality and accuracy. ', 'fiveth.png', '$12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=212313;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
