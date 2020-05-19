-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 19 Mei 2020 pada 09.08
-- Versi Server: 5.7.29-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cinema`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `author`
--

CREATE TABLE `author` (
  `id` int(11) NOT NULL,
  `name_author` varchar(255) NOT NULL,
  `img_author` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `author`
--

INSERT INTO `author` (`id`, `name_author`, `img_author`) VALUES
(1, 'Yuda', 'https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(3, 'Sarah', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

-- --------------------------------------------------------

--
-- Struktur dari tabel `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `img_article` varchar(255) NOT NULL,
  `title_article` varchar(255) NOT NULL,
  `article` text NOT NULL,
  `post_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `published` tinyint(1) NOT NULL,
  `id_author` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `blog`
--

INSERT INTO `blog` (`id`, `img_article`, `title_article`, `article`, `post_date`, `published`, `id_author`) VALUES
(1, 'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Happiest At The Beach', 'He sat in his seat, trying to stretch his legs in what little room he had with seats squeezed in both each side and in front. He had dozed off just after take off, trying to relax after the hustle and bustle of the airport. He never understood airports. Everyone rushing to get to the front of the queue to board the plane, even though everyone had pre-booked seats months in advance, people lugging their suitcases through the airport instead of checking them in to the hold. ', '2020-04-01 09:14:00', 1, 1),
(2, 'https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Holiday Handover Hints', 'Everyone who works in an office environment has those times in the run up to their annual leave when they’re rushing around, trying to get things done, and worrying about what’s going to happen when they’re away and thus what mess they’re going to come back to.', '2020-04-01 09:16:58', 1, 3),
(3, 'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'The holiday', 'He sat in his seat, trying to stretch his legs in what little room he had with seats squeezed in both each side and in front. He had dozed off just after take off, trying to relax after the hustle and bustle of the airport. He never understood airports. Everyone rushing to get to the front of the queue to board the plane, even though everyone had pre-booked seats months in advance, people lugging their suitcases through the airport instead of checking them in to the hold. ', '2020-04-05 10:15:42', 1, 1),
(5, 'https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Holidays Make Productive', 'The main reason is because many employees felt guilty to take the paid holiday leave.\nIn fact, some scientific research shows that more holidays can make the employees happier, healthier, and more productive at work.\nIn this article, I will show you six reasons why taking more holidays can make you more productive, and I am sure you will be surprised the reason number 6.\nReason 1: Employees Can Have Better Work Performance', '2020-04-05 10:15:46', 1, 1),
(6, 'https://images.pexels.com/photos/4005801/pexels-photo-4005801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Lesson Learned', 'Usually people tend to have a dream, and by achieving them people usually make ways, make paths that they need to go to achieve them. But they forget small things that they think not important. And let it stay there until the waves of small things come to them. We tend to focus so much on what we wanted to be, and makes us forget about what we have to be.\nStart doing what you need, to can do what you want.', '2020-03-02 06:53:32', 0, 1),
(7, 'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Desire to Explore', 'It seems that I had always a urge for wandering around. As my parents love to say, I was a little Tarzan, with a never-ending spirit of curiosity to try something new, to get lost somewhere else or wander in places I shouldn’t be. \n\nOne of the first interesting English words I learned was “explore\". I still remember myself trying to read a text about Christopher Columbus and how he was intrigued to discover what was unknown to other people during those years.When it was believed that the earth was flat and it could end from Portugal to North India.', '2020-04-05 16:23:43', 1, 3),
(8, 'https://images.pexels.com/photos/682406/pexels-photo-682406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Plane Accident', '<h2><span style=\"color: rgba(0, 0, 0, 0.84);\">The morning of 6th January 1942</span></h2><p><span style=\"color: rgba(0, 0, 0, 0.84);\">Was going to be a cold one. Not that this was unusual for New York, mused the night-shift air controller at LaGuardia’s tower, but it did mean he’d have to wrap up extra warm when he headed home.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.84);\">He looked at his watch. It was 5:54 a.m. Two hours to go, then. Two hours more to stay awake. This was the downside of overnight duty: no planes to manage meant it was always a struggle to keep alert</span></p>', '2020-05-14 23:42:26', 1, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `list_image_mountain`
--

CREATE TABLE `list_image_mountain` (
  `id` int(11) NOT NULL,
  `img_mt` varchar(255) NOT NULL,
  `id_mountain` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `list_image_mountain`
--

INSERT INTO `list_image_mountain` (`id`, `img_mt`, `id_mountain`) VALUES
(1, 'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', 1),
(2, 'https://images.pexels.com/photos/2451040/pexels-photo-2451040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `mountain`
--

CREATE TABLE `mountain` (
  `id` int(11) NOT NULL,
  `name_mt` varchar(255) NOT NULL,
  `img_mt` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `mountain`
--

INSERT INTO `mountain` (`id`, `name_mt`, `img_mt`, `location`) VALUES
(1, 'Mt. Fuji', 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Honshu, Japan'),
(2, 'Mt. Everest', 'https://www.outsideonline.com/sites/default/files/styles/full-page/public/2020/03/11/everest-north-side-china_h.jpg?itok=envCwX0c', 'Southeast Ridge, Nepal');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_author` (`id_author`);

--
-- Indexes for table `list_image_mountain`
--
ALTER TABLE `list_image_mountain`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_mountain` (`id_mountain`);

--
-- Indexes for table `mountain`
--
ALTER TABLE `mountain`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `list_image_mountain`
--
ALTER TABLE `list_image_mountain`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `mountain`
--
ALTER TABLE `mountain`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `fk_author` FOREIGN KEY (`id_author`) REFERENCES `author` (`id`);

--
-- Ketidakleluasaan untuk tabel `list_image_mountain`
--
ALTER TABLE `list_image_mountain`
  ADD CONSTRAINT `list_image_mountain_ibfk_1` FOREIGN KEY (`id_mountain`) REFERENCES `mountain` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
