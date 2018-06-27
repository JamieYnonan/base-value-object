<?php

namespace BaseValueObject\Scalar\Ip;

use PHPUnit\Framework\TestCase;

/**
 * Class IpV6Test
 * @package BaseValueObject\Scalar\Ip
 */
class IpV6Test extends TestCase
{
    /**
     * @test
     * @expectedException \InvalidArgumentException
     */
    public function invalidIpV6Exception()
    {
        new IpV6('255.10.10.10');
    }

    /**
     * @test
     */
    public function validIpV4()
    {
        $ip = '2002:0:0:0:0:0:0:0';
        $ipV6 = new IpV6($ip);
        $this->assertEquals($ip, $ipV6->value());
    }
}
