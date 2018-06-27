<?php

namespace BaseValueObject\Scalar\Ip;

use PHPUnit\Framework\TestCase;

/**
 * Class IpV4Test
 * @package BaseValueObject\Scalar\Ip
 */
class IpV4Test extends TestCase
{
    /**
     * @test
     * @expectedException \InvalidArgumentException
     */
    public function invalidIpV4Exception()
    {
        new IpV4('256.10.10.10');
    }

    /**
     * @test
     */
    public function validIpV4()
    {
        $ip = '255.255.255.255';
        $ipV4 = new IpV4($ip);
        $this->assertEquals($ip, $ipV4->value());
    }
}
