from breaking_bad import call


def test_schwartz_alquist():
    assert call(["Eliott Schwartz", "Todd Alquist"]) == [
        "S0515 - Granite State",
        "S0516 - Felina",
    ]


def test_krazy_8():
    assert call(["Krazy-8"]) == [
        "S0101 - Pilot",
        "S0102 - Cat's in the Bag...",
        "S0103 - ...And the Bag's in the River",
    ]


def test_white_fring():
    assert call(["Walter White", "Gustavo Fring"]) == [
        "S0211 - Mandala",
        "S0213 - ABQ",
        "S0301 - No Más",
        "S0302 - Caballo sin Nombre",
        "S0303 - IFT",
        "S0304 - Green Light",
        "S0305 - Más",
        "S0306 - Sunset",
        "S0308 - I See You",
        "S0309 - Kafkaesque",
        "S0311 - Abiquiu",
        "S0312 - Half measures",
        "S0313 - Full Measure",
        "S0401 - Box Cutter",
        "S0402 - Thirty-Eight Snub",
        "S0404 - Bullet Points",
        "S0405 - Shotgun",
        "S0406 - Cornered",
        "S0407 - Problem Dog",
        "S0408 - Hermanos",
        "S0409 - Bug",
        "S0410 - Salud",
        "S0411 - Crawl Space",
        "S0412 - End Times",
        "S0413 - Face Off",
    ]


def test_empty():
    assert call([]) == []


def test_walter_pinkman():
    assert call(["Walter Pinkman"]) == []


def test_wallter_white():
    assert call(["Walter White"]) == [
        "S0101 - Pilot",
        "S0102 - Cat's in the Bag...",
        "S0103 - ...And the Bag's in the River",
        "S0104 - Cancer Man",
        "S0105 - Gray Matter",
        "S0106 - Crazy Handful of Nothin",
        "S0107 - A No-Rough-Stuff-Type Deal",
        "S0201 - Seven-Thirty-Seven",
        "S0202 - Grilled",
        "S0203 - Bit by a Dead Bee",
        "S0204 - Down",
        "S0205 - Breakage",
        "S0206 - Peekaboo",
        "S0207 - Negro y Azul",
        "S0208 - Better Call Saul",
        "S0209 - 4 Days Out",
        "S0210 - Over",
        "S0211 - Mandala",
        "S0212 - Phoenix",
        "S0213 - ABQ",
        "S0301 - No Más",
        "S0302 - Caballo sin Nombre",
        "S0303 - IFT",
        "S0304 - Green Light",
        "S0305 - Más",
        "S0306 - Sunset",
        "S0307 - One Minute",
        "S0308 - I See You",
        "S0309 - Kafkaesque",
        "S0310 - Fly",
        "S0311 - Abiquiu",
        "S0312 - Half measures",
        "S0313 - Full Measure",
        "S0401 - Box Cutter",
        "S0402 - Thirty-Eight Snub",
        "S0403 - Open House",
        "S0404 - Bullet Points",
        "S0405 - Shotgun",
        "S0406 - Cornered",
        "S0407 - Problem Dog",
        "S0408 - Hermanos",
        "S0409 - Bug",
        "S0410 - Salud",
        "S0411 - Crawl Space",
        "S0412 - End Times",
        "S0413 - Face Off",
        "S0501 - Live Free of Die",
        "S0502 - Madrigal",
        "S0503 - Hazard Pay",
        "S0504 - Fifty-One",
        "S0505 - Dead Freight",
        "S0506 - Buyout",
        "S0507 - Say My Name",
        "S0508 - Gliding Over All",
        "S0509 - Blood Money",
        "S0510 - Buried",
        "S0511 - Confessions",
        "S0512 - Rabid Dog",
        "S0513 - To'hajilee",
        "S0514 - Ozymandias",
        "S0515 - Granite State",
        "S0516 - Felina",
    ]
