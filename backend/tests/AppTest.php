<?php


namespace App\Tests;


use App\DataFixtures\CommentFixture;
use App\DataFixtures\PostFixture;
use App\DataFixtures\UserFixture;
use Liip\TestFixturesBundle\Test\FixturesTrait;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class AppTest extends WebTestCase
{
    use FixturesTrait;

    public function __construct($name = null, array $data = [], $dataName = '')
    {
        parent::__construct($name, $data, $dataName);

        // Load data fixtures to populate the test database
        $this->loadFixtures([UserFixture::class, PostFixture::class, CommentFixture::class]);
    }

    // Method to avoid empty AppTest warning while testing
    public function testValidInt()
    {
        $this->assertEquals(1, 1);
    }
}
