-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Apr 2020 pada 11.56
-- Versi server: 10.3.16-MariaDB
-- Versi PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
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
  `post_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `published` tinyint(1) NOT NULL,
  `id_author` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `blog`
--

INSERT INTO `blog` (`id`, `img_article`, `title_article`, `article`, `post_date`, `published`, `id_author`) VALUES
(1, 'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Happiest At The Beach', 'Water, as an element, has a calming effect and gives you a sense of clarity. The best vacation spots across the world are surrounded by incredible water bodies. From Maldives to Barbados, countless people visit these regions to let their worries drift away.\r\nUnderstandably so. Because beaches have a way of instilling tranquility with leisure -allowing us to let go of our worries and problems. For ages, the beach has been the place to take a break from reality, triggering contentment and bringing out our inner child.\r\n', '2020-04-01 09:14:00', 1, 1),
(2, 'https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Holiday Handover Hints', 'Everyone who works in an office environment has those times in the run up to their annual leave when they’re rushing around, trying to get things done, and worrying about what’s going to happen when they’re away and thus what mess they’re going to come back to.', '2020-04-01 09:16:58', 1, 3),
(3, 'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'The holiday', 'He sat in his seat, trying to stretch his legs in what little room he had with seats squeezed in both each side and in front. He had dozed off just after take off, trying to relax after the hustle and bustle of the airport. He never understood airports. Everyone rushing to get to the front of the queue to board the plane, even though everyone had pre-booked seats months in advance, people lugging their suitcases through the airport instead of checking them in to the hold.\r\nAll that fuss was over with for the time being, all he had to cope with now was being crammed into a tight fitting seat for several hours without enough room to straighten his legs or his arms.\r\nHe shut his eyes again and laid back in the chair, trying to forget his current surroundings.', '2020-03-30 03:33:23', 0, 1),
(5, 'https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Holidays Make Productive', 'The main reason is because many employees felt guilty to take the paid holiday leave.\nIn fact, some scientific research shows that more holidays can make the employees happier, healthier, and more productive at work.\nIn this article, I will show you six reasons why taking more holidays can make you more productive, and I am sure you will be surprised the reason number 6.\nReason 1: Employees Can Have Better Work Performance', '2020-03-01 09:02:10', 0, 1),
(6, 'https://images.pexels.com/photos/1853373/pexels-photo-1853373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', '5 Best Beaches In Indonesia', 'Indonesia is a country which is situated between the Indian and Pacific oceans. It is the archipelago consisting of almost more than 13000 islands. The islands are having many volcanoes, beaches, jungles and wildlife.\nThe country is having some of the best beaches in Asia. Here is the list of some best beaches in Indonesia.\n1. Nihiwatu Beach, Sumba\n2. Nusa Dua Beach, Bali\n3. Nusa Penida Beach, Bali Island\n4. Gili Meno Beach, Gili Islands\n5. Pink Beach, Komodo\n', '2020-03-02 06:53:32', 0, 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `ticket`
--

CREATE TABLE `ticket` (
  `id` int(11) NOT NULL,
  `place` varchar(3) DEFAULT NULL,
  `booked_name` varchar(255) DEFAULT NULL,
  `booked_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `ticket`
--

INSERT INTO `ticket` (`id`, `place`, `booked_name`, `booked_date`) VALUES
(1, 'J1', 'Yuda', '2020-02-04 20:00:00'),
(2, 'E1', 'Yuda', '2020-02-05 00:00:00'),
(3, 'A1', 'Yuda', '2020-02-11 00:00:00'),
(4, 'G1', 'Yuda', '2020-02-12 00:00:00'),
(5, 'A2', 'Yuda', '2020-02-15 00:00:00'),
(6, 'B3', 'Yuda', '2020-02-19 00:00:00'),
(7, 'C6', 'Yuda', '2020-02-28 00:00:00'),
(8, 'E1', 'Yuda', '2020-02-10 00:00:00'),
(9, 'F1', 'Yuda', '2020-02-05 22:00:00'),
(10, 'G5', 'Yuda', '2020-02-03 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_author` (`id_author`);

--
-- Indeks untuk tabel `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `author`
--
ALTER TABLE `author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `fk_author` FOREIGN KEY (`id_author`) REFERENCES `author` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
