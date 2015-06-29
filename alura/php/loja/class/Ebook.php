<?php
 class Ebook extends Livro {

    private $waterMark;

    public function getWaterMark() {
      return $waterMark;
    }

    public function setWaterMark($waterMark) {
      $this->$waterMark = $waterMark;
    }

 }
?>
