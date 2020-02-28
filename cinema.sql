-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Feb 2020 pada 10.59
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
(1, 'J1', 'Yuda', '2020-02-06 00:00:00'),
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
-- Indeks untuk tabel `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
