<?php

use PhpOffice\PhpSpreadsheet\Cell;
use PhpOffice\PhpSpreadsheet\IOFactory;

error_reporting(E_ALL);
set_time_limit(0);

date_default_timezone_set('Europe/London');
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <title>PhpSpreadsheet Reader Example #15</title>

    </head>
    <body>

        <h1>PhpSpreadsheet Reader Example #15</h1>
        <h2>Simple File Reader for Tab-Separated Value File using the Advanced Value Binder</h2>
        <?php
        require_once __DIR__ . '/../../../src/Bootstrap.php';

        Cell::setValueBinder(new Cell\AdvancedValueBinder());

        $inputFileType = 'Csv';
        $inputFileName = './sampleData/example1.tsv';

        $reader = IOFactory::createReader($inputFileType);
        echo 'Loading file ', pathinfo($inputFileName, PATHINFO_BASENAME), ' into WorkSheet #1 using IOFactory with a defined reader type of ', $inputFileType, '<br />';
        $reader->setDelimiter("\t");
        $spreadsheet = $reader->load($inputFileName);
        $spreadsheet->getActiveSheet()->setTitle(pathinfo($inputFileName, PATHINFO_BASENAME));

        echo '<hr />';

        echo $spreadsheet->getSheetCount(), ' worksheet', (($spreadsheet->getSheetCount() == 1) ? '' : 's'), ' loaded<br /><br />';
        $loadedSheetNames = $spreadsheet->getSheetNames();
        foreach ($loadedSheetNames as $sheetIndex => $loadedSheetName) {
            echo '<b>Worksheet #', $sheetIndex, ' -> ', $loadedSheetName, ' (Formatted)</b><br />';
            $spreadsheet->setActiveSheetIndexByName($loadedSheetName);
            $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);
            var_dump($sheetData);
            echo '<br />';
        }

        echo '<hr />';

        foreach ($loadedSheetNames as $sheetIndex => $loadedSheetName) {
            echo '<b>Worksheet #', $sheetIndex, ' -> ', $loadedSheetName, ' (Unformatted)</b><br />';
            $spreadsheet->setActiveSheetIndexByName($loadedSheetName);
            $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, false, true);
            var_dump($sheetData);
            echo '<br />';
        }

        echo '<hr />';

        foreach ($loadedSheetNames as $sheetIndex => $loadedSheetName) {
            echo '<b>Worksheet #', $sheetIndex, ' -> ', $loadedSheetName, ' (Raw)</b><br />';
            $spreadsheet->setActiveSheetIndexByName($loadedSheetName);
            $sheetData = $spreadsheet->getActiveSheet()->toArray(null, false, false, true);
            var_dump($sheetData);
            echo '<br />';
        }
        ?>
    <body>
</html>