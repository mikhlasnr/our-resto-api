-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2021 at 03:12 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `our_resto_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `detailpesanan`
--

CREATE TABLE `detailpesanan` (
  `IdPesanan` int(5) DEFAULT NULL,
  `IdMenu` int(4) DEFAULT NULL,
  `Quantity` int(5) NOT NULL,
  `SubTotal` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `detailpesanan`
--

INSERT INTO `detailpesanan` (`IdPesanan`, `IdMenu`, `Quantity`, `SubTotal`) VALUES
(44, 1088, 3, 45000),
(44, 1085, 2, 46000),
(46, 1082, 4, 120000),
(46, 1089, 3, 75000),
(46, 1087, 1, 18000),
(47, 1081, 1, 30000),
(47, 1082, 1, 30000),
(47, 1086, 2, 40000),
(47, 1085, 5, 115000),
(48, 1083, 2, 70000),
(48, 1088, 2, 30000),
(48, 1079, 1, 24100),
(48, 1091, 2, 30000),
(48, 1090, 1, 20000),
(48, 1087, 1, 18000),
(49, 1088, 2, 30000),
(50, 1089, 4, 100000),
(51, 1087, 2, 36000),
(51, 1085, 2, 46000),
(51, 1083, 1, 35000),
(52, 1088, 2, 30000),
(52, 1083, 2, 70000),
(52, 1085, 2, 46000),
(52, 1079, 1, 24100),
(52, 1090, 1, 20000),
(53, 1088, 1, 15000),
(53, 1087, 1, 18000),
(57, 1085, 1, 23000),
(57, 1086, 1, 20000),
(57, 1082, 3, 90000),
(59, 1082, 1, 30000),
(59, 1086, 1, 20000),
(59, 1091, 18, 270000),
(61, 1081, 2, 60000),
(61, 1082, 2, 60000),
(66, 1081, 3, 90000),
(66, 1082, 1, 30000),
(68, 1081, 2, 60000),
(68, 1083, 2, 70000),
(69, 1087, 2, 36000),
(69, 1079, 2, 48200),
(69, 1089, 1, 25000),
(69, 1086, 5, 100000),
(70, 1087, 2, 36000),
(70, 1079, 2, 48200);

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `IdKategori` int(3) NOT NULL,
  `NamaKategori` varchar(20) NOT NULL,
  `Foto` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`IdKategori`, `NamaKategori`, `Foto`) VALUES
(32, 'Sandwich', 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/kategoriImages%2F32?alt=media&token=6bb87519-37e6-4f3a-8d70-57186e9e59ee'),
(33, 'Burger', 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/kategoriImages%2F33?alt=media&token=1e240180-93a9-40ea-8181-0048380343f3'),
(34, 'Drink', 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/kategoriImages%2F34?alt=media&token=859045d0-51a9-4d18-ab7c-3fbe6c12b86a'),
(35, 'Hot Dog', 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/kategoriImages%2F35?alt=media&token=5871fa2c-3f70-4919-a082-84e4733fbb48'),
(41, 'Donut', 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/kategoriImages%2F41?alt=media&token=3e73fc2d-c7c3-4d57-bdd8-fdae905d085b');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `IdMenu` int(4) NOT NULL,
  `NamaMenu` varchar(50) NOT NULL,
  `Harga` int(20) NOT NULL,
  `Stok` int(5) NOT NULL,
  `IdKategori` int(3) DEFAULT NULL,
  `Foto` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`IdMenu`, `NamaMenu`, `Harga`, `Stok`, `IdKategori`, `Foto`) VALUES
(1079, 'Burgure Dulexee', 24100, 85, 35, 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/menuImages%2F1079?alt=media&token=415edc48-4bff-4101-987a-002df39843fc'),
(1080, 'Big Fish', 20000, 0, 33, 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/menuImages%2F1080?alt=media&token=d0bb47e4-a027-4fbc-936b-66c03b94bd7c'),
(1081, 'Cripy Chicken Sandwich', 30000, 53, 33, 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/menuImages%2F1081?alt=media&token=a7d4dc7a-d13b-4573-bcba-99aa2071d011'),
(1082, 'Hamburger', 30000, 0, 33, 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/menuImages%2F1082?alt=media&token=5ef1b941-cbe0-43ef-883e-4ef81f3dab13'),
(1083, 'Double Whop', 35000, 84, 33, 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/menuImages%2F1083?alt=media&token=1f201358-8f66-4184-8b11-a25f2f8d6b3c'),
(1085, 'Alcapone', 23000, 61, 41, 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/menuImages%2F1085?alt=media&token=0d6b00f7-0ee9-474b-8e82-08fdecddfa25'),
(1086, 'Black Jack', 20000, 80, 41, 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/menuImages%2F1086?alt=media&token=8eb7e47d-392d-42ae-9b40-3d04e88012fb'),
(1087, 'Chili Cheese', 18000, 97, 35, 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/menuImages%2F1087?alt=media&token=937fb7f7-7ed0-4e90-8f30-7bba25ddffc3'),
(1088, 'Coca Cola', 15000, 84, 34, 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/menuImages%2F1088?alt=media&token=2ed72879-b957-41f6-ab6f-541d969c3ac0'),
(1089, 'Hotdog Italian', 25000, 185, 35, 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/menuImages%2F1089?alt=media&token=4b8814a1-8cf0-4d23-a277-8fcef38933ed'),
(1090, 'Ham', 20000, 94, 32, 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/menuImages%2F1090?alt=media&token=3f96b9b4-4594-4db4-950c-0b58b4366782'),
(1091, 'Hot Wings', 15000, 0, NULL, 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/menuImages%2F1091?alt=media&token=0851d4bf-b6f9-4c31-aba9-8765f296e34f');

-- --------------------------------------------------------

--
-- Table structure for table `pembayaran`
--

CREATE TABLE `pembayaran` (
  `IdPesanan` int(5) NOT NULL,
  `IdUser` int(4) DEFAULT NULL,
  `Nominal` int(20) NOT NULL,
  `Kembalian` int(20) NOT NULL,
  `TglPembayaran` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pembayaran`
--

INSERT INTO `pembayaran` (`IdPesanan`, `IdUser`, `Nominal`, `Kembalian`, `TglPembayaran`) VALUES
(44, 1229, 92000, 1000, '2021-08-05 12:38:24'),
(46, 1229, 220000, 7000, '2021-08-05 14:02:45'),
(47, 1229, 215000, 0, '2021-08-05 14:02:52'),
(49, 1229, 50000, 20000, '2021-08-05 14:03:00'),
(48, 1229, 200000, 7900, '2021-08-05 14:03:06'),
(51, 1229, 120000, 3000, '2021-08-05 14:03:14'),
(52, 1229, 200000, 9900, '2021-08-05 14:03:22'),
(50, 1229, 100000, 0, '2021-08-05 14:03:41'),
(57, 1229, 140000, 7000, '2021-08-06 09:08:09'),
(59, 1229, 320000, 0, '2021-08-06 10:43:44');

-- --------------------------------------------------------

--
-- Table structure for table `pesanan`
--

CREATE TABLE `pesanan` (
  `IdPesanan` int(5) NOT NULL,
  `IdUser` int(4) DEFAULT NULL,
  `AtasNama` varchar(30) NOT NULL,
  `NoMeja` varchar(5) NOT NULL,
  `TotalQuantity` int(5) NOT NULL,
  `TotalHarga` int(20) NOT NULL,
  `StatusMasak` enum('dimasak','selesai') NOT NULL DEFAULT 'dimasak',
  `StatusAntar` enum('sudah','belum') NOT NULL DEFAULT 'belum',
  `StatusBayar` enum('belum','lunas') NOT NULL DEFAULT 'belum',
  `TanggalDibuat` datetime NOT NULL DEFAULT current_timestamp(),
  `TahunDibuat` year(4) NOT NULL DEFAULT current_timestamp(),
  `BulanDibuat` enum('1','2','3','4','5','6','7','8','9','10','11','12') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pesanan`
--

INSERT INTO `pesanan` (`IdPesanan`, `IdUser`, `AtasNama`, `NoMeja`, `TotalQuantity`, `TotalHarga`, `StatusMasak`, `StatusAntar`, `StatusBayar`, `TanggalDibuat`, `TahunDibuat`, `BulanDibuat`) VALUES
(44, 1228, 'budi', '2', 5, 91000, 'selesai', 'sudah', 'lunas', '2020-08-05 00:00:00', 2020, '8'),
(46, 1228, 'susi', '3', 8, 213000, 'selesai', 'sudah', 'lunas', '2022-02-02 00:00:00', 2022, '2'),
(47, 1228, 'fira', '4', 9, 213000, 'selesai', 'sudah', 'lunas', '2021-03-05 00:00:00', 2021, '3'),
(48, 1228, 'bayu', '6', 9, 192100, 'selesai', 'sudah', 'lunas', '2021-04-05 00:00:00', 2021, '4'),
(49, 1228, 'farhan', '7', 2, 30000, 'selesai', 'sudah', 'lunas', '2021-04-04 00:00:00', 2021, '4'),
(50, 1228, 'algi', '11', 4, 100000, 'selesai', 'sudah', 'lunas', '2021-05-03 00:00:00', 2021, '5'),
(51, 1228, 'jhon', '12', 5, 117000, 'selesai', 'sudah', 'lunas', '2021-06-10 00:00:00', 2021, '6'),
(52, 1228, 'maya', '14', 8, 190100, 'selesai', 'sudah', 'lunas', '2021-06-05 00:00:00', 2021, '6'),
(53, 1228, 'argya', '17', 2, 33000, 'selesai', 'sudah', 'belum', '2021-08-04 00:00:00', 2021, '8'),
(57, 1228, 'jojo', '12', 5, 133000, 'selesai', 'sudah', 'lunas', '2021-08-06 09:01:21', 2021, '8'),
(59, 1228, 'beno', '12', 20, 320000, 'selesai', 'sudah', 'lunas', '2021-08-06 09:05:54', 2021, '8'),
(61, 1228, 'asep', '7', 4, 120000, 'selesai', 'sudah', 'belum', '2021-08-06 10:00:15', 2021, '8'),
(66, 1228, 'jojo', '4', 4, 120000, 'selesai', 'sudah', 'belum', '2021-08-06 10:37:31', 2021, '8'),
(68, 1228, 'budi', '1', 4, 130000, 'selesai', 'belum', 'belum', '2021-08-06 10:40:07', 2021, '8'),
(69, 1228, 'naufi', '9', 10, 209200, 'dimasak', 'belum', 'belum', '2021-08-06 10:40:50', 2021, '8'),
(70, 1228, 'udin', '20', 4, 84200, 'dimasak', 'belum', 'belum', '2021-08-06 10:41:03', 2021, '8');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `IdRole` int(4) NOT NULL,
  `NamaRole` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`IdRole`, `NamaRole`) VALUES
(1201, 'Pemilik'),
(1202, 'Pelayan'),
(1203, 'Kasir'),
(1204, 'Koki'),
(1205, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `IdUser` int(4) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Nama` varchar(255) NOT NULL,
  `NoTelp` varchar(15) NOT NULL,
  `IdRole` int(4) NOT NULL,
  `StatusOnline` tinyint(1) DEFAULT 0,
  `Password` varchar(255) NOT NULL DEFAULT '12345',
  `Alamat` varchar(100) DEFAULT NULL,
  `Foto` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`IdUser`, `Email`, `Nama`, `NoTelp`, `IdRole`, `StatusOnline`, `Password`, `Alamat`, `Foto`) VALUES
(1223, 'hayin@ourresto.com', 'Hayin', '081293847322', 1204, 0, '$2a$08$hGY0P/P2TT/fWFT1xuG1peRF6ZPhck4gD6vj2yqEUH1sAearePiQa', 'Jambi', 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/userImages%2F1223?alt=media&token=fd731d96-da28-4f08-bb26-29ae1cd690e6'),
(1224, 'admin@ourresto.com', 'Admin', '081345672345', 1205, 0, '$2a$08$aeAlcYWLorHUuOCS5TsGNepQpUVmN6GsoKiWN1OKxoru011VUg3/e', 'tidak ada alamat', 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/userImages%2F1224?alt=media&token=3a8b9bf7-8dd1-4e9c-b917-4d2d7d208677'),
(1226, 'pakresto@ourresto.com', ' Pak Resto', '0876546261271', 1201, 0, '$2a$08$CZ1TPDMpqVuecpbg21gsauhKRI09QmU7s11Y6HmO4MkSlPAKopwb2', 'Bandung', 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/userImages%2F1226?alt=media&token=c33b1f76-c85c-4e42-8d68-b385fd33865a'),
(1228, 'ilham@ourresto.com', 'Ilham', '0938388383838', 1202, 0, '$2a$08$6X69LOcNPp7U.ZaECcq1HuAJBSq2cdgqfTCEkguc08LZrPCkkZNG2', '-', 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/userImages%2F1228?alt=media&token=9058a6ad-2b74-4b42-8810-00ee866a2a58'),
(1229, 'alfi@ourresto.com', 'Alfi', '1231231231312', 1203, 0, '$2a$08$/WXnN9vnAIOR60cSLot.s.b09qr5LP9aKv.VMo9JB4DZZuvnH9fUa', 'bandun', 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/userImages%2F1229?alt=media&token=f6b31f7d-5134-433a-b1e5-f36af71c1def'),
(1259, 'ikhlas@ourresto.com', 'ikhlas', '081293949112', 1205, 0, '$2a$08$rn7iYqSNCskkau.MhAf49OnklhM9lZ7Z5.WhZSzBCcdhJ6srPVVrW', 'pamuruyan', 'https://firebasestorage.googleapis.com/v0/b/our-resto.appspot.com/o/userImages%2F1259?alt=media&token=de31fac7-6230-489f-aa04-cfbe2e210e50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detailpesanan`
--
ALTER TABLE `detailpesanan`
  ADD KEY `IdPesanan_FK` (`IdPesanan`),
  ADD KEY `IdMenu_FK` (`IdMenu`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`IdKategori`),
  ADD UNIQUE KEY `NamaKategori` (`NamaKategori`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`IdMenu`),
  ADD UNIQUE KEY `NamaMenu` (`NamaMenu`),
  ADD KEY `KodeKategori_FK1` (`IdKategori`);

--
-- Indexes for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD KEY `IdPesanan_FK2` (`IdPesanan`),
  ADD KEY `IdUserr_FK2` (`IdUser`);

--
-- Indexes for table `pesanan`
--
ALTER TABLE `pesanan`
  ADD PRIMARY KEY (`IdPesanan`),
  ADD KEY `IdUser_FK` (`IdUser`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`IdRole`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`IdUser`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `IdRole_FK1` (`IdRole`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `IdKategori` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `IdMenu` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1097;

--
-- AUTO_INCREMENT for table `pesanan`
--
ALTER TABLE `pesanan`
  MODIFY `IdPesanan` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `IdRole` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1206;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `IdUser` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1264;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detailpesanan`
--
ALTER TABLE `detailpesanan`
  ADD CONSTRAINT `IdMenu_FK` FOREIGN KEY (`IdMenu`) REFERENCES `menu` (`IdMenu`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `IdPesanan_FK` FOREIGN KEY (`IdPesanan`) REFERENCES `pesanan` (`IdPesanan`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `IdKategori_FK` FOREIGN KEY (`IdKategori`) REFERENCES `kategori` (`IdKategori`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Constraints for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD CONSTRAINT `IdPesanan_FK2` FOREIGN KEY (`IdPesanan`) REFERENCES `pesanan` (`IdPesanan`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `IdUser_FK2` FOREIGN KEY (`IdUser`) REFERENCES `user` (`IdUser`) ON DELETE SET NULL;

--
-- Constraints for table `pesanan`
--
ALTER TABLE `pesanan`
  ADD CONSTRAINT `IdUser_FK` FOREIGN KEY (`IdUser`) REFERENCES `user` (`IdUser`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `IdRole_FK1` FOREIGN KEY (`IdRole`) REFERENCES `role` (`IdRole`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
