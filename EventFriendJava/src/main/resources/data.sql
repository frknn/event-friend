drop table if exists oauth_access_token;
create table oauth_access_token (
  token_id VARCHAR(256),
  token LONGVARBINARY,
  authentication_id VARCHAR(256) PRIMARY KEY,
  user_name VARCHAR(256),
  client_id VARCHAR(256),
  authentication LONGVARBINARY,
  refresh_token VARCHAR(256)
);

drop table if exists oauth_refresh_token;
create table oauth_refresh_token (
  token_id VARCHAR(256),
  token LONGVARBINARY,
  authentication LONGVARBINARY
);

insert into event (baslik,bulusma_yeri,detay,etkinlik_adresi,il,ilce,kac_kisi) values ('Halı Saha','100.Yıl Halı Sahası','Yarın akşam 8-9 saatlerinde halı sahaya 2 kişi eksiğimiz var.','100.Yıl Mah. Kemalpaşa Sokak.','Karabük','Merkez',2);
insert into event (baslik,bulusma_yeri,detay,etkinlik_adresi,il,ilce,kac_kisi) values ('Konser','Çarşı','Konsere fazladan bir biletim var','Bağlar Mahallesi Fevzi Çakmak Caddesi, Espark','Eskişehir','Tepebaşı',1);